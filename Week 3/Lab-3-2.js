//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var ourTeam = ["Ronaldo", "Messi", "Casillas", "Ramos", "Kroos"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//REMOVE LAST MEMBER
var myRemove = ourTeam.pop();
console.log(ourTeam);

//ADD SEAN TO FRONT OF ARRAY
var myAdd = ourTeam.unshift("Sean");
console.log(ourTeam);
//REARRANGE THE ARRAY ALPHABETICALLY
var myArr = ourTeam.sort();
console.log(ourTeam);
//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have" + " " + ourTeam.length + " " +  "people in our group");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (var i = 0; i < 5;  i++ ){
    var myNum = i + 1;
    console.log(myNum + " " + ourTeam[i]);
}
