function create() {
    //get value typed in the name box//
    const name1 = document.getElementById ("nameInput1").value;

    const story = name1+" is a Swanson." + "who" + 

    document.getElementById("madlib").textContent = story;
}