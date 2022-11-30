<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function onUpload(Request $request){
        $request->file('fileKey')->store('myFile');
    }
}
