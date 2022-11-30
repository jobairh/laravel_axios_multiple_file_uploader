<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadController;


Route::get('/', function () {
    return view('home');
});
Route::post('/fileUp',[UploadController::class,'onUpload'])->name('fileUp');
