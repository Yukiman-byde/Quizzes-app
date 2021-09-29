<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Display;
use App\Category;
use App\Quize;
use App\Transcription;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Category $category)
    {
        dd($category->displays);
            return $Category->find($category)->toJson();
    }
    
     public function advance(Category $category, Display $display)
    {
         $category = $category->find(7);
         $displays = $category->displays;
         return $displays->toJson();
    }
    
     public function rudiment(Category $category, Display $display)
    {
         $category = $category->find(8);
         $displays = $category->displays()->get();
         return $displays->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function news(Display $display, Category $category, $id = 1)
    {
      $category = $category->find($id);
      $displays = $category->find($id)->displays()->get();
      return view('category', ['displays' => $displays, 'category' => $category]);
    }
    
    public function comedy(Display $display, Category $category, $id = 2)
    {
      $category = $category->find($id);
      $displays = $category->find($id)->displays()->get();
     return view('category', ['displays' => $displays, 'category' => $category]);
    }
    
    public function sing(Display $display, Category $category, $id = 3)
    {
        $category = $category->find($id);
        $displays = $category->find($id)->displays()->get();
        return view('category', ['displays' => $displays, 'category' => $category]);
    }
    
    public function basic(Display $display, Category $category, $id = 4)
    {
      $category = $category->find($id);
      $displays = $category->find($id)->displays()->get();
      return view('category', ['displays' => $displays, 'category' => $category]);
    }
    
    public function culture(Display $display, Category $category, $id = 5)
    {
      $category = $category->find($id);
      $displays = $category->find($id)->displays()->get();
      return view('category', ['displays' => $displays, 'category' => $category]);
    }
    
    public function expression(Display $display, Category $category, $id = 6)
    {
      $category = $category->find($id);
      $displays = $category->find($id)->displays()->get();
      return view('category', ['displays' => $displays, 'category' => $category]);
    }
}
