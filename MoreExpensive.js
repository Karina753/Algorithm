var itemPrice1 = window.prompt("Escriba el precio del primer objeto", "");
var itemPrice2 = window.prompt("Escriba el precio del segundo objeto", "");
var itemPrice3 = window.prompt("Escriba el precio del tercer objeto", "");

var toNumber1 = parseInt(itemPrice1);
var toNumber2 = parseInt(itemPrice2);
var toNumber3 = parseInt(itemPrice3);

var priceList = [
    toNumber1,
    toNumber2,
    toNumber3 ]

    function MoreExpensive(){
        if(toNumber1 > toNumber2){
            expensiveItem = number1
        } else {
            if(toNumber2 > toNumber3){
                expensiveItem = toNumber2
            } else {
                expensiveItem = toNumber3
            }
        }
    }
MoreExpensive();

var filtered = priceList.filter(item => item !== expensiveItem);

console.log("Los objetos menos caros cuestan lo siguiente",filtered);