<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class NoteController extends Controller
{
    public function fetchNotes(){

        $allnotes = DB::table('notes')->join('categories','notes.category_id','=','categories.id')->select('notes.*','categories.category_name')->get();
        if($allnotes->isEmpty()){
            return response()->json([
                'status'=>400,
                'message'=>'Something went wrong'
            ],400);
        }else{
            return response()->json([
                'status'=>200,
                'notes'=>$allnotes,
            ],200);
        }
    }

    public function addNote(Request $request){
        if(!$request->title){
            return response()->json([
                'status'=>400,
                'type'=>'title',
                'message'=>'Title is required'
            ],400);
        }
        
        if(!$request->category_id){
            return response()->json([
                'status'=>400,
                'type'=>'category_id',
                'message'=>'Category is required'
            ],400);
        }

        if(!$request->content){
            return response()->json([
                'status'=>400,
                'type'=>'content',
                'message'=>'Description is required'
            ],400);
        }

        DB::table('notes')->insert([
            'title'=>$request->title,
            'category_id'=>$request->category_id,
            'user_id'=>$request->user_id,
            'content'=>$request->content,
            'note_date'=>now()->format('M d, Y'),
            'created_at'=>now(),
            'updated_at'=>now()
        ]);
        
        return response()->json([
            'status'=>200,
            'message'=>'Notes added'
        ],200);
    }

    public function singleView(int $id){

        $singleNote = DB::table('notes')->join('categories','notes.category_id','=','categories.id')->select('notes.*','categories.category_name')->where('notes.id',$id)->first();

        if(!$singleNote){
            return response()->json([
                'status'=>404,
                'message'=>'No note found'
            ],404);
        }else{
            return response()->json([
                'status'=>200,
                'note'=>$singleNote
            ],200);
        }
    }

    public function fetchEdit(int $id){
        $singleNote = DB::table('notes')->join('categories','notes.category_id','=','categories.id')->select('notes.*','categories.category_name')->where('notes.id',$id)->first();
        if(!$singleNote){
            return response()->json([
                'status'=>404,
                'message'=>'something went wrong'
            ],404);
        }else{
            return response()->json([
                'status'=>200,
                'note'=>$singleNote
            ],200);
        }

    }

    public function updateNote(Request $request){

        $updated = DB::table('notes')->where('id',$request->id)->update([
            'title'=>$request->title,
            'category_id'=>$request->category_id,
            'content'=>$request->content,
        ]);
        if($updated){
            return response()->json([
                'status'=>200,
                'message'=>'Note updated'
            ],200);
        }else{
            return response()->json([
                'status'=>409,
                'message'=>'Something went wrong'
            ],409);
        }
    }
}
