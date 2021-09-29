<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Display;

class History extends Model
{
    public function users()
    {
       return $this->belongsTo('App\User');
    }
    
    public function displays()
    {
      return $this->belongsToMany('App\Display');
    }
}
