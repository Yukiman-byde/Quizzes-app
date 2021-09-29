<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Mail\PostSent;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CreatePost;
use Illuminate\Support\Facades\Mail;
use App\Mail\SampleNotification;


class PostController extends Controller
{
    public function post(){
        return view('sents');
    }
    
    public function index(Request $request)
    {
        
        $data = $request->content;
        $to = 'fungashaka@gmail.com';
  
	   Mail::to($to)->send(new PostSent($data));        
      
        
        return view('sents');
      
    }
}
