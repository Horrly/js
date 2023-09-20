names = ["Toheeb","Barakat","Femi","Angela","olu","ola"];
function whospaying() {
    var nuberofpeople = names.lenght;
    var peopleposition = Math.floor(Math.random()*6);
    var finalpos =names[peopleposition];
    return finalpos +" is the one paying";  
}

