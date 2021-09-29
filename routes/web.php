<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/redis', function(){
//     $app = Redis::connection();
//     $app->set("key2", "value2");
//     print_r($app->get("key2"));
// });


//JSONファイル(一覧ページから)
Route::get('/displays/json', 'DisplayController@json');
Route::get('/displays/json/{id}', 'DisplayController@json');
Route::get('/categories/json', 'DisplayController@category');
Route::get('/categories/json/{sub_name}', 'DisplayController@categories');
Route::get('/question/displays/json/{id}', 'DisplayController@json');
Route::get('/question/quize/json/{id}', 'DisplayController@quize');
Route::get('/transcription/json/{id}', 'DisplayController@trans');

//JSONファイル（ユーザー詳細）
Route::get('/user/json/', 'UserController@user');
Route::get('/user/history/json/', 'UserController@history');
Route::get('/user/display/json/', 'UserController@display');
 //試しに
Route::get('/upload', 'UserController@upLoad');



//JSON(カテゴリーページ)
Route::get('/categories/taggin/{Category}', 'CategoryController@index');
Route::get('/category/json/Advance', 'CategoryController@advance');
Route::get('/category/json/Rudiment', 'CategoryController@rudiment');

//authenticationのためのルーティング
Auth::routes();

Route::get('display/home', 'HomeController@index')->name('home');

Route::get('login/google', 
          'Auth\LoginController@redirectToGoogle');
Route::get('login/google/callback', 
          'Auth\LoginController@handleGoogleCallback');

Route::get('/', function () {
 return redirect('display/home');
});

//ページのルーティング
 Route::get('/display', 'DisplayController@index');
 Route::get('/search/{name}', 'DisplayController@search');
 Route::get('/outcome/{id}', 'DisplayController@outcome')->middleware('auth');
 Route::post('/outcome/{id}', 'DisplayController@outcome')->middleware('auth');
 Route::get('/display/{id}', 'DisplayController@show')->middleware('auth');
 Route::get('/display/{sub_name}/{id}', 'DisplayController@show')->middleware('auth');
 Route::get('/question/display/{id}', 'DisplayController@edit')->middleware('auth');
 Route::get('/question/display/{sub_name}/{id}', 'DisplayController@edit')->middleware('auth');
 
 //カテゴリーからのページのルーティング
 Route::get('/category/News', 'CategoryController@news');
 Route::get('/category/comedy', 'CategoryController@comedy');
 Route::get('/category/song', 'CategoryController@sing');
 Route::get('/category/basic', 'CategoryController@basic'); 
 Route::get('/category/culture', 'CategoryController@culture');
 Route::get('/category/expression', 'CategoryController@expression');
 
 //ポストを使ったルーティング
 Route::get('/post', 'PostController@post')->name('posts.create');
 Route::get('/postmail', 'PostController@index')->name('posts.mail');
 Route::post('/postmail', 'PostController@index')->name('posts.mail');
 
 Route::get('/user/image/', 'DisplayController@userEdit');
 Route::post('/user/image/', 'DisplayController@userEdit');
 

 

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');




//Route::get('/home', 'HomeController@index')->name('home');