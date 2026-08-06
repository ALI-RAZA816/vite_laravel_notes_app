<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function CreateAccount(Request $request){
       
        if(!$request->name){
            return response()->json([
                'status'=>400,
                'type'=>'name',
                'message'=>'Name is required',
            ],400);
        }
        
        if(!$request->email){
            return response()->json([
                'status'=>400,
                'type'=>'email',
                'message'=>'Email is required',
            ],400);
        }
       
        if(!$request->password){
            return response()->json([
                'status'=>400,
                'type'=>'password',
                'message'=>'Password is required',
            ],400);
        }
        
        if($request->password != $request->confirm_password){
            return response()->json([
                'status'=>400,
                'type'=>'confirm_password',
                'message'=>"Password doesn't match",
            ],400);
        }

        $exist_email = DB::table("users")->where('email',$request->email)->first();
        if($exist_email){
            return response()->json([
                'status'=>409,
                'type'=>'email',
                'message'=>'Email already exists'
            ],409);
        }

        $hashed_password = Hash::make($request->password);

        DB::table("users")->insert([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$hashed_password,
            'created_at'=>now(),
            'updated_at'=>now(),
        ]);

        return response()->json([
            'status'=>200,
            'message'=>'Accounted created successfully'
        ],200);
        
    }


    public function loginAccount(Request $request){
        
        if(!$request->email){
            return response()->json([
                'status'=>400,
                'type'=>'email',
                'message'=>'Email is required',
            ],400);
        }
       
        if(!$request->password){
            return response()->json([
                'status'=>400,
                'type'=>'password',
                'message'=>'Password is required',
            ],400);
        }

        $user = DB::table('users')->where('email',$request->email)->first();

        if(!$user){
            return response()->json([
                'status'=>409,
                'type'=>'email',
                'message'=>"Email doesn't exist"
            ]);
        }

        $hashed_password = Hash::check($request->password, $user->password);
        if(!$hashed_password){
            return response()->json([
                'status'=>409,
                'type'=>'password',
                'message'=>'Password incorrect'
            ]);
        }

        $validUser = User::where('email',$request->email)->first();
        if($validUser){

            $token = $validUser->createToken('token')->plainTextToken;
            return response()->json([
                'status'=>200,
                'token'=>$token,
                'message'=>'Login successful'
            ]);
        }
    }


    public function logoutAccount(Request $request){
        if(Auth::check()){
            $user = $request->user();
            $user->tokens()->delete();
            Auth::logout();
            return response()->json([
                'status'=>200,
                'message'=>'You logout'
            ]);
        }
    }
}
