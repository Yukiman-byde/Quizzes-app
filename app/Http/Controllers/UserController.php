<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\History;
use App\Display;


class UserController extends Controller
{
   public function user()
    {
        $user = Auth::user();
        return $user->toJson();
    }
    
   public function history(){
       $history = new History;
       $user = Auth::user();
       // dd($user->with('histories:display_id')->display()->get());
    //   dd($user->histories()->display()->get());
       return $user->histories()->get()->toJson();
   }
   
   public function display(){
       
        // $history = new History;
        // $display = new Display;
        // $user = Auth::user();
        // $histories = $user->histories()->get();
        // foreach($histories as $history => $h){
        //   $display = $h->displays()->get();
        // }
        $array_display = [];
        $history = new History;
        $display = new Display;
        $user = Auth::user();
        $histories = $user->histories()->get();
        foreach($histories as $history => $h){
           $name = $h->displays()->first()->name;
           $display = array('number'=>$history+1 ,'name'=> $name, 'wholeNumber'=>$h->wholeNumber, 'solvedNumber' => $h->solvedNumber);
           array_unshift($array_display, $display);
        }
        
          return json_encode($array_display);
   }
   
   public function upLoad(){
 
      return view('Upload');
   }
   
}
