//######## LAB 2-1 FILE DELETE CONFIRMATION ########
//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE.
var abc = confirm("Are you sure you want to delete this file");

//2. IF USER CLICKS OKAY, POPUP messageOut WITH yesMessage.
if(abc == true){
alert(messageOut + yesMessage);
}

//3. IF USER CLICKS ANYTHING BUT OKAY, POPUP messageOut WITH noMessage.
if(abc == false){
    alert(messageOut + noMessage);
}

