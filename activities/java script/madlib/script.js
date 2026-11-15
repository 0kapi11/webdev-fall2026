var yourAdjective = prompt("enter an adjective ");
var name = prompt("enter your name ");
var animal = prompt("enter an animal ");
var verb = prompt("enter an action word ");
var place= prompt("enter a place ");
var verb2= prompt("enter an action word ");
var place2 = prompt("enter another place" );
var verb3 = prompt("enter a verb that implies a search ");
var adjective = prompt("enter a adjective that implies a long time ");
var verb4 = prompt("enter a past tense verb that indicates found ");
//creates the madlib blanks
//uses input and crreates the story
function story() {
    var fullStory=("one day a " +  name + " saw a " +yourAdjective+ " " + animal + " " + verb + "ing out of the " + place + " " + name + " was worried about the " + animal + " and tried to " + verb3 + "  after it " +adjective+ ", " + name + " " + verb + " found the " +animal );
    document.getElementById("storyOutput").textContent = fullStory;
}
