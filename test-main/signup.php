<!DOCTYPE html>
<html>
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}



/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 35px;
  margin: 5px 0 22px 0;
  border: none;
  background:darkgreen;
  display: inline-block;
}
h1,h2{
    color: black;
}
body{
    background-color:green;
}
input[type=text]:focus, input[type=password]:focus {
  background-color: darkgreen;
  outline: none;
  color: white;
}

h1 {
  border: 1px green;
}

/* Set a style for all buttons */
button {
  background-color: darkgreen;
  color: black;
  padding: 14px 20px;
  margin: 10px 500px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

.name{
  color: darkgreen;
}

/* Float cancel and signup buttons and add an equal width */
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
.signupbtn {
     width: 100%;
  }
}
</style>
<body>

<form action="login.php" style="border:1px solid #ccc">

  <div class="container">

    <h1>Sign Up</h1>

    <h2>Please fill in this form to create an account.</h2>
    <hr>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    
    
    <div class="clearfix">

      <button type="submit" class="signupbtn">Sign Up</button>

    </div>
  </div>
</form>

</body>
</html>
