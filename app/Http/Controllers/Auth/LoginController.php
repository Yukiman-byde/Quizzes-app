<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Socialite;
use App\User;
use Auth;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;
       

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    // protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
     
    }
    
    
    
    //     public function redirectPath()
    // {
    //     $path = \Session::pull('url.intended');
    //     return $path;
    // }
    
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleGoogleCallback()
    {
        // $provider_user = Socialite::driver('google')->stateless()->user();
        // $user = User::where('email', $provider_user->email)->first();
        
        // if($user == null){
        //  $user = User::Create([
        //      'name' =>$provider_user->getName(),
        //      'email' => $provider_user->getEmail(),
        //      'provider_id' => $provider_user->getId(),
        //      'picture' => $provider_user->avatar(),
        //      ]);
        // }
             
        //      \Auth::Login($user,true);
        //      return redirect('/');
        $user = Socialite::driver('google')->stateless()->user();
        
         $user = User::firstOrCreate([
             'name' =>$user->getName(),
             'email' => $user->getEmail(),
             'provider_id' => $user->getId(),
             ]);
             
             Auth::Login($user,true);
             return redirect('/');
        // $user->token;
    }
}
