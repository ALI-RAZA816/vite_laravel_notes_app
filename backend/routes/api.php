<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\NoteController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
    
Route::post('account',[UserController::class,'CreateAccount']);
Route::post('login',[UserController::class,'loginAccount']);
Route::post('logout',[UserController::class,'logoutAccount']);
Route::post('category',[CategoryController::class,'addCategory']);
Route::get('fetchcat',[CategoryController::class,'fetchCategory']);
Route::delete('deletecat/{id}',[CategoryController::class,'deleteCategory']);
Route::post('note',[NoteController::class,'addNote']);
Route::get('allnotes',[NoteController::class,'fetchNotes']);
Route::get('singlenote/{id}',[NoteController::class,'singleView']);
Route::get('fetchedit/{id}',[NoteController::class,'fetchEdit']);
Route::post('update',[NoteController::class,'updateNote']);

