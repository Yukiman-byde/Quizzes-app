@extends('layout')

@section('content')
<div style="">
   <div style="display: flex; max-width: 90%; margin: 100px auto;">
       <div style="flex: 1">
           <h1>Your Answer</h1>
         @foreach($dejas as $deja)
           @if($deja['answer'] == $deja['selected'])
            <h3 style="background-color: skyblue; padding:30px; width: 100%;">{{$deja['question']}}:{{$deja['selected']}}:正解</h3>
           @else
            <h3 style="background-color: pink; padding:30px; width: 100%;">{{$deja['question']}}:{{$deja['selected']}}:不正解</h3>
           @endif
         @endforeach
       </div>
         
      <div style="flex: 1;">
         <h1>Correct Answer</h1>
         @foreach($dejas as $deja)
           @if($deja['answer'] == $deja['selected'])
            <h3 style="background-color: skyblue; padding:30px; width: 100%;">{{$deja['answer']}}</h3>
           @else
            <h3 style="background-color: pink; padding:30px; width: 100%;">{{$deja['answer']}}</h3>
           @endif
         @endforeach
      </div> 
   </div>

       <div style="max-width: 90%; margin: 100px auto;overflow: scroll; white-space: nowrap;">
              <h1>More informations with {{$name}}</h1>
           <div id="carouselExampleCaptions" style="display: flex;" class="carousel slide" data-bs-ride="carousel">
               @foreach($displays as $display)
                  <a href="/display/{{$sub_name}}/{{$display->id}}" style="text-decoration: none;">
                    <div class="card" style="width: 18rem; margin: 15px;">
                         <img src={{$display->thumbnail}} class="card-img-top" alt="...">
                         <div class="card-body" style="overflow: hidden;">
                           <p class="card-text">{{$display->name}}</p>
                           <p class="card-text">{{$display->description}}</p>
                         </div>
                   </div> 
                  </a>
               @endforeach
           </div>
       </div>
</div>

@endsection