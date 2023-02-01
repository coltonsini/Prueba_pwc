function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "admin" && password === "password") {
    alert("Login Successful");
    window.location.replace("/Landing.html");    
    return false;
  } else {
    alert("Login Failed: Incorrect username or password");    
    return false;
  }
}