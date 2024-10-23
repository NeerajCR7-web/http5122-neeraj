//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
function avgvalue(num1, num2, num3, num4, num5){
   
//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
var add = (num1 + num2 + num3 + num4 + num5)/5; 
return add.toFixed(1);
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
avgvalue(5, 10, 15, 20, 25);
console.log( avgvalue(5, 10, 15, 20, 25));

var webdes = 90;
var frontend = 90;
var database = 70;
var workshop = 90;
var interaction = 85;

var avggrade = avgvalue(webdes, frontend, database, workshop, interaction);
if(avggrade > 70){
   alert("Great, you have been graduated");
} else {
   alert("Review Required");
}