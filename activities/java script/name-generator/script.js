function generatedName() {
    const month = document.getElementById("month").value;
    const age = Number(document.getElementById("age").value);
    const pet = document.getElementById("pet").value;
    let beginning="";
    let middle="";
    let last="";
    if (month === "January") {
        // Case 1: The month is january
        beginning = "Jane ";
        document.getElementById("result").style.color = "red";
        document.getElementById("result").style.backgroundColor = "yellow";
    } else if (month === "Febuary") {
        // Case 2: The month is february
        beginning= "Fred ";
        document.getElementById("result").style.color = "blue";
        document.getElementById("result").style.backgroundColor = "pink";
    } else if (month === "March") {
        // Case 3: The month is March
        beginning = "Margie ";
        document.getElementById("result").style.color = "yellow";
        document.getElementById("result").style.backgroundColor = "blue";
    } else if (month === "April") {
        beginning = "Jack ";
        document.getElementById("result").style.color = "green";
        document.getElementById("result").style.backgroundColor = "yellow";
    } else if (month === "May") {
        beginning = "Maddie ";
        document.getElementById("result").style.color = "white";
        document.getElementById("result").style.backgroundColor = "purple";
    } else if (month === "June") {
        beginning = "Brooks ";
        document.getElementById("result").style.color = "pink";
        document.getElementById("result").style.backgroundColor = "red";
    } else if (month === "July") {
        beginning = "Birdie ";
        document.getElementById("result").style.color = "blue";
        document.getElementById("result").style.backgroundColor = "red";
    } else if (month === "August") {
        beginning = "Guss "
        document.getElementById("result").style.color = "green";
        document.getElementById("result").style.backgroundColor = "yellow";
    } else if (month === "September") {
        beginning = "Scott ";
        document.getElementById("result").style.color = "blue";
        document.getElementById("result").style.backgroundColor = "orange";
    } else if (month === "October") {
        beginning = "Hal ";
        document.getElementById("result").style.color = "blue";
        document.getElementById("result").style.backgroundColor = "green";
    } else if (month === "December") {
        beginning = "Oliver ";
        document.getElementById("result").style.color = "purple";
        document.getElementById("result").style.backgroundColor = "orange";
    } else {
        // november
        beginning = "Ember";
        document.getElementById("result").style.color = "blue";
        document.getElementById("result").style.backgroundColor = "white";
    } 
    if (age <= 10) {
        middle = "Birdie ";
    } else if (age <= 20) {
        middle = "William ";
    } else if (age <= 30) {
        middle="Wilbur ";
    } else if (age <= 40) {
        middle = "John ";
    } else if (age <= 50) {
        middle = "Jorge ";
    }
    if (pet==="turtle") {
        last = "Charfoos";
    } else if (pet==="bird") {
        last = "Singer";
    } else if (pet==="cat") {
        last = "Anderson";
    } else if (pet==="dog") {
        last = "Williams";
    }
    let generatedName = beginning + middle + last;
    document.getElementById("result").textContent = generatedName;
}
