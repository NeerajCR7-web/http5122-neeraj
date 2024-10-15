//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var username = "dart";
		// Correct password
		var pwd = "vader";
		// user name input
		var username ;
		// password input
		var yourpwd ;



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var pop = prompt("Enter your username")

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(pop);
//5. CREATE POPUP BOX FOR PASSWORD
var pd = prompt("Enter your password")
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(pd);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(pop === username && pd === pwd)
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
{alert("Welcome Back" + " " + username);
	console.log("Login Successful");
}



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else {
	alert("Invalid Username/password");
	console.log("Login Fail");
}