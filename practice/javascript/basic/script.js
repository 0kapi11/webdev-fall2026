const myName="Oliver Charfoos";
let myAge = 16;

console.log(myName);
console.log(myAge);
console.log("My name is " + myName + " and my age is " + myAge + ".")
//java reads left to right and will convert as necessary//

console.log("The sum of my age + my age is " + myAge + myAge);
console.log(myAge + myAge + " is the sum of my age + my age"); 
console.log("The sum of my age + my age is " + (myAge + myAge));

function reveal() {
    //alert("Goodbye");//
    const mySpan = document.getElementById("name");
    console.log(mySpan);
    mySpan.textContent = "Oliver";
}