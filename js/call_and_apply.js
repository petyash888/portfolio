//create two objects and these two objects to have two properties - name and type;

var animal1 = { 
    name: "Rexy", 
    type: "parrot"};
var animal2 = { 
    name: "Dino", 
    type: "dog"};

//make a function which prints all data of the objects in the window
//Вариант 1
var animal = { 
    printData: function(food, size, place){
        return "This is " + this.name + " and his type is " + this.type + ". He eats " + food + ". He is " + size + " tall and lives in " + place +".";
    }
};

//document.write(animal.printData.call(animal1));
//document.write(animal.printData.call(animal2));
document.write(animal.printData.apply(animal1, ["seeds", "10 sm", "home"]));
document.write("<br>");
document.write(animal.printData.apply(animal2, ["bones", "50 sm", "Sofia"]));

var update = function(food, size, habitat){
    this.food = food;
    this.size = size;
    this.habitat = habitat;
}

update.call(animal1, "vegeterian", "20sm","forest");
update.apply(animal2, ["meat", "60sm", "yard"]);

console.log(animal1);
console.log(animal2);


//Вариант 2

//function printData(){
//    document.write("This is " + this.name + " and his type is " + this.type);
//}

//printData.call(animal1);

//console.log(animal.printData.apply(animal1, ["seeds", "10 sm","home"]));




//5. Добавете нова функция, която да изкарва звука, който издава животното в алерт. Звукът се подава като параметър към тази функция.
//var animal_sound = { printDataSound(sound){
//    return "The sound " + this.name + " plays is " + sound;
//}
//                   };
//
//
//alert(animal_sound.printDataSound.apply(animal1, ["pu pu"]));
//alert(animal_sound.printDataSound.apply(animal2, ["bau bau"]));



var dispatch = function(animalType, method, args){
    method.apply(animalType, args);
}

dispatch(animal2,update,["meat", "60 sm", "yard"]);

console.log(animal2);

//// training apply and see benefits
//var dispatch = function(animalType, method, args){
//    //update.apply(animal2, ["meat", "60 sm", "yard"]);
//    method.apply(animalType, args);
//}
//
//console.log("Before");
//console.log(animal2);
//
//dispatch(animal2, update, ["meat", "60 sm", "yard"]);
//
//console.log("Afterr");
//console.log(animal2);





