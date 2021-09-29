@extends('layout')

@section('content')
     <div style="max-width:50%; margin: 100px auto; justify-content:'center';">
        <form method="post" action="{{ route('posts.mail')}}" enctype="multipart/form-data">
           @csrf
           <h1>Email</h1>
           <p>If you have some great idea for this application's betterment, write your ideas down and send!</p>
                <div class="form">
                   <div>
                      <label></label>
                      <textarea class="" name="content" cols="50" rows="10">{{ old('content') }}</textarea>
                   </div>
                   <div>
                      <button type="submit">Send E-mail</button>
                   </div>
                </div>
        </form>
     </div>

@endsection