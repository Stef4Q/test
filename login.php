
<html>

<head>
    <title>Page Title</title>
    <link href="login.css" rel="stylesheet" href="css/style.css">
</head>

<body>

<h1> Login</h1>

<form name="login" action="test2.php" method="post">

	<input type="username" placeholder="Enter Username" name="username" required autocomplete="off"><br><br>
	<input type="password" placeholder="Enter Password" name="password" required><br><br>
	<button style="font-size:13px; padding:8px 12px" class="button" type="submit">Let's go!</button>
</form>

</body>
</html>


<?php

	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];

	$UsernameFile = fopen("usernames.csv","r") or die ("Can't open file");
	$headerRow = fgetcsv($UsernameFile);

	while (($row = fgetcsv($UsernameFile)) !== FALSE)
	{
		$col = array($row[0]);

		if (in_array($username, $col))
		{

			if ($password == $row[1])
				{
					echo "<script>window.location.href = 'ono.php'</script>";
				}

			else
				{
					echo "Sorry, the username and the password did not match.<br> Please try again";
		}
		}

	}


	fclose($UsernameFile);

	if (!in_array($username, $col))
		{
			echo "username does not exist";
		}

?>

<class

h1
{
    margin: 100px;
    padding: 5px;
    font-family: Arial, Helvetica, "sans-serif";
    font-size: 36px;
    text-align: center;
    color: white;
}

body
{
    margin: 100px;
    padding: 0px;
    background-color: green;
    font-family: Arial, Helvetica, "sans-serif";
    font-size: 18px;
    text-align: center;
}

input[type=username] {
  width: 50%;
  padding: 22px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 4px solid darkgreen;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=password] {
  width: 50%;
  padding: 22px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 4px solid darkgreen;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=submit] {
  background-color: black;
  border: none;
  color: black;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

?>