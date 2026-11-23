// STEP 1: Track whether holiday mode is on

// STEP 2: Create the function that runs when the button is clicked

    // STEP 3: get the button and the elements to change

    
    // STEP 4: if holiday mode wasn't on, turn it on


    // STEP 5: if holiday mode was on, turn it off
let holidayMode="off";
const hanukkahMusic= new Audio("hanukkah.mp3");
const lofiMusic= new Audio("lofi.mp3");
function HanukkahMenu(){
    if(holidayMode=="off"){
        holidayMode="on";

        document.getElementById("site-header").style.backgroundColor="darkblue";
        document.getElementById("header-text").textContent="Happy Hanukkah!";
        document.getElementById("welcome-heading").textContent="Chag Oreem Samayach!";
        document.getElementById("button").textContent="menu";
        document.getElementById("site-footer").style.backgroundColor="lightblue";
        document.body.style.backgroundImage="linear-gradient(blue,white,blue)";
        lofiMusic.pause();
        hanukkahMusic.play();
        
    } else{
        holidayMode="off";
        hanukkahMusic.pause();
        lofiMusic.play();
        document.getElementById("site-header").style.backgroundColor="";
        document.getElementById("header-text").textContent="Welcome";
        document.getElementById("welcome-heading").textContent="Welcome to Sunny Side Bakery!";
        document.getElementById("button").textContent="Hannukkah menu";
        document.getElementById("site-footer").style.backgroundColor="lightgrey";
    }
}
