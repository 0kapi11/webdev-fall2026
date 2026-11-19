// STEP 1: Track whether holiday mode is on

// STEP 2: Create the function that runs when the button is clicked

    // STEP 3: get the button and the elements to change

    
    // STEP 4: if holiday mode wasn't on, turn it on


    // STEP 5: if holiday mode was on, turn it off
let holidayMode="off";

function HanukkahMenu(){
    if(holidayMode=="off"){
        holidayMode="on";

        document.getElementById("site-header").style.backgroundColor="darkblue";
        document.getElementById("header-text").textContent="Happy Hanukkah!";
        document.getElementById("welcome-heading").textContent="Chag Oreem Samayach!";
        document.getElementById("button").textContent="menu";
        document.getElementById("site-footer").style.backgroundColor="lightblue";
    } else{
        holidayMode="off";

        document.getElementById("site-header").style.backgroundColor="";
        document.getElementById("header-text").textContent="Welcome";
        document.getElementById("welcome-heading").textContent="Welcome to Sunny Side Bakery!";
        document.getElementById("button").textContent="Hannukkah menu";
        document.getElementById("site-footer").style.backgroundColor="lightgrey";
    }
}
