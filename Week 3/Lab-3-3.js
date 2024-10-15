//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var userPrice =  [];
var total = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(total < 35){
	var input = prompt("Enter the dollar value of each item");



	//GET ITEM COST FROM USER
	var cost = parseInt(input);
	
	//CONVERT USER INPUT TO A NUMBER
	total = total + cost;
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	userPrice.push(cost);
}
	//PUSH ITEM COST TO CART ARRAY
	alert("Your shipping for this order will be free");

	console.log("Item Prices " +  userPrice.join(" | "));
	
	


//SEND POPUP MESSAGE TO USER


//SEND OUTPUT TO CONSOLE

