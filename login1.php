<html>
<head>
<title>Login form </title>
	<link rel="stylesheet" type="text/css" href="style.css">
	

	<style>
body{
	margin: 0;
	padding: 0;
	background: url(s3.jpg);
	background-size: cover;
	background-position: center;
	font-family: sans-serif;
}

.loginbox{
	width: 320px;
	height: 470px;
	background: e2e2e2;
	color: #000;
	top: 50%;
	left: 85%;
	position: absolute;
	transform: translate(-50%, -50%);
	box-sizing: border-box;
	padding: 60px 30px;

}

.img11{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	position: absolute;
	top: -50px;
	left: calc(50% - 50px);
}

h1{
	margin: 0;
	padding: 0 0 20px;
	text-align: center;
	font-size: 25px;
}

.loginbox p{
	margin: 0;
	padding: 0;
	font-weight: bold;
}

.loginbox input{
	width: 100%;
	margin-bottom: 20px;
}

.loginbox input[type="text"], input[type="password"]
{
	border: none;
	border-bottom: 1px solid #fff;
	background: transparent;
	outline: none;
	height: 40px;            
	color: #fff;
	font-size: 16px;
}

.loginbox input[type="submit"]
{
	border: none;
	outline: none;
	height: 40px;
	background: #708090;
	color: #fff;
	font-size: 18px;
	border-radius: 20px;
}

.loginbox input[type="submit"]:hover
{
	cursor: pointer;
	background: DodgerBlue;
	color: #000;
}

.loginbox a{
	text-decoration: none;
	font-size: 12px;
	line-height: 20px;
	color: darkgrey;
}

.loginbox a:hover
{
	color: #fb2525;
}
</style>
</head>
<body>
<form name="form1" action="" method="post">
	<div class="loginbox">
	<img src="hm.jpg" class="img11">
		<h1> Login Here</h1>
		<form>
			<p>Username</p>
			<input type="text" name="t1" placeholder="Enter Username" required pattern="^[A-Za-z0-9]+">
			<p>Password</p>
			<input type="password" name="t2" placeholder="Enter Password" required pattern="^[A-Za-z0-9]+">
		

			<input type="submit" name="submit1" value="Get Hospitalized" />
			<p>Not Registered</p>
			<a href="register.php">Click here </a>
			
			
		</form>
		
		
		

<?php

if(isset($_POST["submit1"]))
{
 $pwd=md5($_POST["t2"]);
	$link=mysqli_connect("localhost","root","");
	mysqli_select_db($link,"healthmeister");
	$count=0;
	$res=mysqli_query($link,"select * from registration where username='$_POST[t1]' && password='$pwd'");
	$count=mysqli_num_rows($res);
    if($count>0)
	{
	?>
	<script type="text/javascript">
	window.location="home.html";
	</script>
	<?php
	
	
	}
	else
	{
	?>
	<script type="text/javascript">
	alert("incorrect username or password");
	</script>
	<?php
	
	}

}

?>
</body>
</html>