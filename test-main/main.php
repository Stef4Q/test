<!DOCTYPE html>
<html>
<head>
<style>

h1{
  font-family: Arial, Helvetica, "sans-serif";
  margin: 100px;
  color:darkgreen;
}

h2{
  font-family: Arial, Helvetica, "sans-serif";
  margin: -700px;
  color: lightgreen;
}

body
{
    margin: 100px;
    padding: 0px;
    background-color:green;
    font-family: Arial, Helvetica, "sans-serif";
    font-size: 18px;
    text-align: center;
}

.button1, .button2 {
  display: inline-block;
  padding: 55px 150px;
  font-size: 50px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: white;
  background-color: green;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px darkgreen;
  margin:  100px 100px;
}

.button2:hover {background-color: darkgreen;}
.button1 :hover {background-color: darkgreen;}

.button2:active {
  background-color: green;
  box-shadow: 10px 5px darkgreen;
  transform: translateY(4px);
}

.button1,:active {
  background-color: green;
  box-shadow: 10px 5px darkgreen;
  transform: translateY(4px);
}

</style>
</head>
<body>


<button>
<input class="button1" type="button" value="Login" onclick="window.open('login.php')"/>
<input class="button2" type="button" value="Sign Up" onclick="window.open('signup.php')"/>
</button>

<h1> 
  Please select an option to login or signup
</h1>

<h2>
  Make friends from all across the world
</h2>

</body>

</html>



