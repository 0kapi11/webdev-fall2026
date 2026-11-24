//creates the madlib blanks
//uses input and crreates the story
//gets inputs and puts them into the story
function story() {
    var yourAdjective = document.getElementById("yourAdjective").value;
    var name = document.getElementById("yourName").value;
    var animal = //finish the other variables
    var verb = 
    var place= 
    var verb2= 
    var place2 = 
    var verb3 = 
    var adjective = 
    var verb4 = 
    var fullStory=("one day a " +  name + " saw a " +yourAdjective+ " " + animal + " " + verb + "ing out of the " + place + " " + name + " was worried about the " + animal + " and tried to " + verb3 + "  after it " +adjective+ ", " + name + " " + verb + " found the " +animal );
    document.getElementById("storyOutput").textContent = fullStory;
}
