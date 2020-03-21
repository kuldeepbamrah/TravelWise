var loggedin;
var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	}

	window.onload=function() {
	if(localStorage.getItem("uname")!=null)
	{
	var mylist = document.getElementById("myListBtn");
mylist.style.display = "inline";
var login = document.getElementById("loginBtn");
login.innerText="Logout";
loggedin = true;

	}
};

function loginLogout()
{
	if(loggedin==true)
	{
		var mylist = document.getElementById("myListBtn");
mylist.style.display = "none";
localStorage.removeItem("uname");
alert(localStorage.getItem("uname"));
loggedin=false;
var login = document.getElementById("loginBtn");
login.innerText="Log In";

	}
	else
	{
	document.getElementById('id01').style.display='inline';
	}
}

	function check()
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(document.getElementById("Uname").value == "test" && document.getElementById("pass").value == "test")
  {

var unm = document.getElementById("Uname").value;
var modal = document.getElementById('id01');
modal.style.display = "none";
alert("done");
var mylist = document.getElementById("myListBtn");
mylist.style.display = "inline";
var login = document.getElementById("loginBtn");
login.innerText="Logout";
loggedin=true;
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("uname", unm );
// Retrieve
  alert(localStorage.getItem("uname"));
} else {
  aert("Sorry, your browser does not support Web Storage...");
}

  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}
