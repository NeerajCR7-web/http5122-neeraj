//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 



//================== CREATE YOUR checkTemp FUNCTION
//This function's job is to check the temperature and alert the user if the temperature is not in the range mentioned...
function checkTemp(currentTemp)
{
    if(currentTemp > 30 || currentTemp < -10)
        {
        return false;
    } 
    else 
    {
        return true;
    }
}
//It needs to receive the input from the user...
var usertemp = prompt("What is the current temperature?");
//It will return the value entered by the user...
var newtemp = parseFloat(usertemp);

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
// the value entered by the user is sent into the function and again follows the checkTemp code
if(checkTemp(newtemp) === false){
    alert("Yikes! No weather  for dog walking");
} else {
    alert("You're good, have a nice walk!");
}