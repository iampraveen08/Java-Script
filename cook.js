let bread1 = prompt("Which bread whould you like to have :- ");
let veggiest1 = prompt("which are your fav veggies");
let sauce1 = prompt("which sauce would you like to have :- ");

function makecook(bread, veggies, sauce) {
    let cook = bread + " bread " + veggies + " " + sauce +  "cook";
    return cook
}

let vegcook = makecook(bread1, veggiest1, sauce1);
console.log(vegcook);