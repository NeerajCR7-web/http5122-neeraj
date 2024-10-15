//######## LAB 2-3 EMAIL SIGNUP ########
//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var mail;



//==== LOGIC =============
var mail = confirm("Would you like to join the mailing list?");
if(mail === true){
   var mail =  prompt("Please write your email", "me@example.com");

 if(mail === "" || mail === null || mail === "me@example.com")
alert("Thank you, but your email was not valid.");
 else {
    alert("Thank you, our next newsletter will be sent to " + mail);
}
} else{
    alert("Thank you, we will not bother you again");
}

