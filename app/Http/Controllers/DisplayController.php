<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\History;
use Storage;
use App\Display;
use App\Category;
use App\Category\sub_name;
use App\Quiz;
use App\Transcription;
use Illuminate\Http\Request;

class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   //displayのデータをJsonへ
    public function json($id = -1){
          if ($id == -1)
        { 
           //リレーション済みで関係性も完璧出来だからこれを送る
           //$display = $display->find($id)->categories()->get();
          // $category = $category->find($id)->displays()->get();
            return Display::get()->toJson();
        } 
        else {
            return Display::all()->find($id)->toJson();
        }
    }
    //categoryのデータをJsonへ
    public function category($id = -1){
         if ($id == -1)
         { 
             return Category::get()->toJson();
         } 
         else {
             return Category::find($id)->toJson();
         }
    }
    //特定のカテゴリーを送る
    public function categories(Category $category,$sub_name){
        $cate = new Category;
        $catego = $cate->where('sub_name', 'LIKE', "%$sub_name%");
       
        return $catego->get()->toJson();
    }
    //displayとくっついてるQuizを送る。
    public function quize($id = -1){
         if ($id == -1)
        { 
            return Display::get()->toJson();
        } 
        else {
            $display = Display::find($id);
            $display = $display->quizzes;
            return $display->toJson();
        }
    }
    //displayにくっついてるdiscriptionを送る。
    public function trans($id = -1){
          if ($id == -1)
        { 
             return Transcription::get()->toJson();
        } 
        else {
             return Transcription::find($id)->toJson();
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
     //一覧ページを表示
         public function index(Category $category,Display $display, $id=2) 
        {
           //$display = $display->find($id)->categories()->get();
            $category = $category->find($id)->displays()->get();
            // dd($display);
            return view('index');
        }
   //問題の回答をOutcomeページに送る。
     public function outcome($id, Request $request, Quiz $quiz, Category $category)
    {
      $count = 0;
      $corrects = [];
      $options = [];
      
      $choices = $request->except(['token']);
      
      $video = new Display;
      $name = $video->find($id)->categories()->value('name');
      $sub_name = $video->find($id)->categories()->value('sub_name');
      $displays = $video->find($id)->categories()->get();
      $num = $video->find($id)->category_id;
      $displays = $category->find($num)->displays()->get();
      
      foreach($choices as $question => $choice) {
         $answer = Quiz::where('question', $question)->value('answear');
         $correct = array('answer' => $answer);
         array_push($corrects, $correct);
      
         $option = array('selected' => $choice);
         array_push($options, $option);
          if($answer != $choice){
          }else {
             $count++;
          }
      }
      
        $solveNumber = $count;
        
         $display = new Display;
         $display = $display->find($id)->quizzes()->get();
         //dd(count($display));
         $display = count($display);
         
         $history = new History;
         
         $history->wholeNumber = $display;
        
         $history->solvedNumber = $solveNumber;
         
         $history->display_id = Display::find($id)->value('id');
         
         $history->user_id = Auth::user()->id;
         
         $history->save();
         
         $history->displays()->attach($id);
   
         $choices = $request->except(['token']);
         
         $dejas = [];
       foreach($choices as $question => $choice) {
          $answer = Quiz::where('question', $question)->value('answear');
          $deja = array('question' => $question, 'selected' => $choice, 'answer'=> $answer);
          array_push($dejas, $deja);
       }
      return view('outcome', ['displays' => $displays, 'dejas' => $dejas, 'name' => $name, 'sub_name' => $sub_name]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Display  $display
     * @return \Illuminate\Http\Response
     */
     //showページを出す。
    public function show()
    {
        return view('show');
    }
    
     //quizページを出す
    public function edit($id)
    {
        //$display = Display::find($id);
        
        return view('quize');
    }
    
        public function user()
       {
           $user = Auth::user();
           return $user->toJson();
       }
    
       public function userEdit(Request $request)
       {
           //$request = $request->image;
             $user = new User;
          
             
          //   $form = $request->all();
             //s3アップロード開始
             //$image = $request->file('image');
             //dd($image);
      // バケットの`quizees-app`フォルダへアップロード
            $path = Storage::disk('s3')->putFile('/quizees-app/', $request->image, 'public');
      // アップロードした画像のフルパスを取得
            $user->picture = Storage::disk('s3')->url($path);

            $user->save();

           return redirect('/display');
       }
   
    
   public function search(Category $category,Display $display, $name){

       //渡されてきたnameはdisplayの中も配列なので同様に,配列にしてから処理したほうがいい。
       $display_name = 
          [
           'name' => $name,
          ];
      $category_name =
         [
         'name' => $name,
         ];
      $msg = '';
      if(!empty($display))
          {
           // $display = $display->categories()->get();
            $displays = Display::where('name', 'like', $display_name['name'])
                                 ->orWhere('description', 'like', $display_name['name'])->get();
                             $categories = '';
                             $sub_name = '';
          }
          if(!count($displays) > 0){
              $tag = new Category;
             $id = $tag->where('name', 'like', $category_name['name'])->value('id');
             $sub_name = $tag->where('name', 'like', $category_name['name'])->value('sub_name');
            
             $cat = $category->find($id);
             if(is_null($cat)){
                 $msg = '該当するビデオはありませんでした。';
             }else {
                $categories = $cat->displays()->get();
             }
          }
              // $display = Display::all();
             

 
            return view('search', ['displays' => $displays, 'categories' => $categories, 'sub_name' => $sub_name, 'msg' => $msg, 'category' => $category]);
     //$display = $display->where('name', 'LIKE', "%$name%");
   }
}
