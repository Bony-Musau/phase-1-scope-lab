// Write your solution in this file!
var customerName='bob';

function upperCaseCustomerCase(){
    return customerName.toUpperCase();
}
console.log(upperCaseCustomerCase());

var bestCustomer="not bob";
function setBestCustomer(){
    return bestCustomer;
}
console.log(setBestCustomer());

function overwriteBestCustomer(){
    if(overwriteBestCustomer != bestCustomer){
        return 'maybe bob';
   }
}
console.log(overwriteBestCustomer());

const leastFavouriteCustomer="john";

function changeLeastFavouriteCustomer(){
    leastFavouriteCustomer=changeLeastFavouriteCustomer;
}
changeLeastFavouriteCustomer("jane")
