function getMilk (money){
    console.log ("get me my milk");
    console.log("buy me " +bottlesofmikl(money,1.5)+ " bottles of milk");
    return money % 1.5;
}
function bottlesofmikl(startingmoney,costpbottle) {
    var numofbottles=Math.floor(startingmoney/costpbottle);
    return numofbottles
}
getMilk(4);