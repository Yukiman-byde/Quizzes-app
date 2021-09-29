@extends('layout')

@section('content')
   <div style="overflow: scroll; white-space: nowrap">
     <div class="card bg-dark text-white" style="border-radius:0px;">
          <img src={{$category->picture}}
              style="height:450px; 
              opacity:0.3;
              position:relative;" 
              class="card-img" alt="...">
          <div class="card-img-overlay">
              <h1 class="card-title"
              style="
              position:absolute;
              top: 50%;
              left: 50%;
              transform: translateY(-50%) translateX(-50%);
              text-shadow:0 0 10px white;"
              >
                  〜{{ $category->name }}〜</h1>
          </div>
    </div>
  </div>     
        
      <div style="display: flex;padding: 20px;overflow: scroll; white-space: nowrap;">
  @foreach($displays as $display)
             <div class="container-fluid;">
                <div class="col" style=" margin-right: 30px;">
                   <a href="/display/{{$category->sub_name}}/{{$display->id}}" style="text-decoration: none;">
                    <div class="card mb-5 mt-5 ml-3" style="width: 500px; box-shadow: 3px 0px 3px gray;">
                      <img src={{$display->thumbnail}} class="card-img-top" alt="...">
                      <div class="card-body" style="overflow: hidden;">
                        <h5 class="card-title">{{$display->name}}</h5>
                        <p class="card-text">{{$display->description}}</p>
                        <p class="card-text"><small class="text-muted">{{$display->updated_at}}</small></p>
                      </div>
                    </div>
                   </a>
                </div>
            </div>

  @endforeach
    </div>
@endsection
  
  
