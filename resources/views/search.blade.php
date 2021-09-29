@extends('layout')

@section('content')

<div class="search_header" style="width: 80%; margin: 0 auto;">
    <div style="text-align:center; margin: 50px;">
     <h1>Search Result</h1>
    
    </div>
      @if($msg)
      <h1>{{$msg}}</h1>
      @elseif(count($displays) > 0)
        @foreach($displays as $display)
        <a  href="/display/{{$display->category->sub_name}}/{{$display->id}}" style="text-decoration:none;">
        <div class="search_result"  style="width:50%; margin: 50px auto;">
           <div class="card mb-3">
              <img src={{$display->thumbnail}} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{$display->name}}</h5>
                <p class="card-text">{{$display->description}}</p>
              </div>
            </div>
        </div>
        </a>
         @endforeach
         @elseif(count($categories)>0)
         @foreach($categories as $category)
            <a  href="/display/{{$sub_name}}/{{$category->id}}" style="text-decoration:none;">
              <div class="search_result"  style="width:50%; margin: 50px auto;">
                 <div class="card mb-3">
                    <img src={{$category->thumbnail}} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{$category->name}}</h5>
                      <p class="card-text">{{$category->description}}</p>
                    </div>
                  </div>
              </div>
           </a>
         @endforeach
         @endif
       
 </div>
@endsection