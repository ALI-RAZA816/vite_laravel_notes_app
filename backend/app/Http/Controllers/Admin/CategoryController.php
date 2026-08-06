<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function fetchCategory(){
        $allCategory = DB::table('categories')->get();
        return response()->json([
            'status'=>200,
            'categories'=>$allCategory,
        ]);
    }

    public function addCategory(Request $request){
        $exist_category = DB::table('categories')->where('category_name',$request->category)->first();
        if($exist_category){
            return response()->json([
                'status'=>400,
                'type'=>'category',
                'message'=>'This category already exist'
            ]);
        }

        if(!$request->category){
            return response()->json([
                'status'=>400,
                'type'=>'category',
                'message'=>'Category required'
            ]);
        }

        $category = DB::table('categories')->insert([
            'category_name'=>$request->category,
            'created_at'=>now(),
            'updated_at'=>now(),
        ]);

        if($category){
            return response()->json([
                'status'=>200,
                'message'=>'category added'
            ]);
        }else{
            return response()->json([
                'status'=>400,
                'message'=>'Something went wrong'
            ]);
        }

    }

    public function deleteCategory(int $id){
    
        $category = DB::table('categories')->where('id',$id)->first();
        if(!$category){
            return response()->json([
                'status'=>404,
                'type'=>'category',
                'message'=>'Category not found'
            ]);
        }

        DB::table("categories")->where('id',$id)->delete();
        $allCategory = DB::table('categories')->get();
        return response()->json([
            'status'=>200,
            'type'=>'category',
            'categories'=>$allCategory,
            'message'=>'Category Deleted'
        ]);
    }
}
