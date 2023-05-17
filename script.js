function calculate() {
    // Get the input values from the user
    var score = parseFloat(document.getElementById("score").value);

    // Perform the operation based on the score

    if (score >= 0 && score <= 30) {
        var result = "Try Harder your score is low!"
    }else if (score >= 31 && score <= 60) {
        var result = "Hey that is a good score but you can do better!"
    }else if (score >= 61 && score <= 100) {
        var result = "Wow you did great!"
    }else {
        result = "Please insert a valid score"
    }

    // Display the result to the user
    document.getElementById("result").innerHTML = result;

}