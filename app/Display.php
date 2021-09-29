<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Display extends Model
{
    public function category(){
        return $this->belongsTo('App\Category');
    }
    
     public function genre(){
        return $this->hasOne('App\Category');
    }
    
    public function quizzes() {
        return $this->hasMany('App\Quiz');
    }
    
    public function categories(){
        return $this->belongsToMany('App\Category');
    }
    
    public function histories()
    {
        return $this->belongsToMany('App\History');
    }
    //  public function trans() {
    //     return $this->hasMany('App\Transcription');
    // }
}