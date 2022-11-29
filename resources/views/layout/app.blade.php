<html>
<head>
    <title>@yield('title')</title>
{{--<link rel="stylesheet" href="{{ asset('css/app.css') }}">--}}
    <link href="{{ asset('frontEndAsset') }}/css/bootstrap.min.css" rel="stylesheet" >
    <link href="{{ asset('frontEndAsset') }}/css/custom.css" rel="stylesheet" >
    <link href="{{ asset('frontEndAsset') }}/css/responsive.css" rel="stylesheet" >
    <link href="{{ asset('frontEndAsset') }}/css/owl.carousel.min.css" rel="stylesheet" >
    <link href="{{ asset('frontEndAsset') }}/css/fontawesome.css" rel="stylesheet">
    <link href="{{ asset('frontEndAsset') }}/css/animate.css" rel="stylesheet">
</head>
<body>

@yield('content')
{{--<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>--}}
<script type="text/javascript" src="{{ asset('frontEndAsset') }}/js/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="{{ asset('frontEndAsset') }}/js/popper.min.js"></script>
<script type="text/javascript" src="{{ asset('frontEndAsset') }}/js/bootstrap.min.js"></script>
<script type="text/javascript" src="{{ asset('frontEndAsset') }}/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="{{ asset('frontEndAsset') }}/js/axios.min.js"></script>
<script type="text/javascript" src="{{ asset('frontEndAsset') }}/js/custom.js"></script>
</body>
</html>
