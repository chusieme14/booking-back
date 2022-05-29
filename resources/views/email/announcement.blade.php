<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta >
    <title>{{$title}}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        .main-container{
            display: block;
        }
        body{
            display: flex;
            justify-content: flex-start
        }
    </style>
</head>
<body>
    <div class="main-container">
        <p>Hi {{$graduate['fullname']}}</p>
        <p style="margin-left: 20px">{{$content}}</p>
        {{-- <br>
        <p>sharable link:</p>
        <p>{{env('FRONT_URL')$graduate['share_code']}}</p> --}}
    </div>
</body>
</html>