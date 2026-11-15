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
    } else if (month === "Febuary") {
        // Case 2: The month is february
        beginning= "Fred ";
    } else if (month === "March") {
        // Case 3: The month is March
        beginning = "Margie ";
    } else if (month === "April") {
        beginning = "Jack ";
    } else if (month === "May") {
        beginning = "Maddie ";
    } else if (month === "June") {
        beginning = "Brooks ";
    } else if (month === "July") {
        beginning = "Birdie ";
    } else if (month === "August") {
        beginning = "Guss "
    } else if (month === "September") {
        beginning = "Scott ";
    } else if (month === "October") {
        beginning = "Hal ";
    } else if (month === "December") {
        beginning = "Oliver ";
    } else {
        // november
        beginning = "Ember";
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
