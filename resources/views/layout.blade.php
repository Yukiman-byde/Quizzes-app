<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Language-app</title>
        <!--<meta name='csrf-token' content='{{ csrf_token() }}'>-->
        <style>body {backgroundColor: blue;}</style>
         <meta name='csrf-token' content='{{ csrf_token() }}'>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>
    <body>
        <div id="header"></div>
       @yield('content') 
        <div id="footer"></div>
       <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>