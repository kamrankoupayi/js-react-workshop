let carObjectSample = {
    name: "Mitsubishi",
    topSpeed: 5000
}
let carObjectSample2 = {
    name: "Toyota",
    topSpeed: 6000
}

var cars = [];

function addElement(element) {
    cars.push(element);
}
addElement(carObjectSample);
addElement(carObjectSample2);

function topSpeed(name){
    return cars.find(function(element){
        return element.name == name;
    }).topSpeed;
}

function names(){
    return cars.map(element => element.name);
}
