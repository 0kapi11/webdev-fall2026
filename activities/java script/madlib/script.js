//creates the madlib blanks
//uses input and crreates the story
//gets inputs and puts them into the story
function story() {
    var yourAdjective = document.getElementById("yourAdjective").value;
    var name = document.getElementById("yourName").value;
    var animal = document.getElementById("yourAnimal").value;  //finish the other variables
    var verb = document.getElementById("yourVerb").value;
    var place= document.getElementById("yourPlace").value;
    var verb2= document.getElementById("secondVerb").value;
    var place2 = document.getElementById("secondPlace").value;
    var verb3 = document.getElementById("thirdVerb").value;
    var adjective = document.getElementById("yourAdjective").value;
    var verb4 = document.getElementById("fourthVerb").value;
    var fullStory=("one day a " +  name + " saw a " +yourAdjective+ " " + animal + " " + verb + "ing out of the " + place + " " + name + " was worried about the " + animal + " and tried to " + verb3 + "  after it " +adjective+ ", " + name + " " + verb + " found the " +animal );
    document.getElementById("storyOutput").textContent = fullStory;
}
