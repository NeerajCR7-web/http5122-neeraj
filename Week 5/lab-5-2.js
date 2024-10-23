//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
var bankCustomer = {
//2. Add the required properties to your object.
lastName: "Cristiano",
branchNumber: 76859302,
accountBalance: 500.25,
interestRate: 1.03,
multipleAccounts: true,

//3. Add your first method and test it. Remember, the methods will change the properties of the object.
makeDeposit: function(value){
    this.accountBalance = this.accountBalance + value;
    return  "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
},


//4. Add your second method and test it.
makeWithdrawal: function(value){
    this.accountBalance = this.accountBalance - value;
    return  "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
},

addInterest: function(value){
    if(this.multipleAccounts === true){
        this.accountBalance = this.accountBalance * (this.interestRate + 0.005);
        return  "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    } else {
        this.accountBalance = this.accountBalance * this.interestRate;
        return  "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    }
    
},

//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!

}
console.log(bankCustomer.accountBalance);
console.log(bankCustomer.makeDeposit(200));
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.addInterest());