//Multiple labels printed on one sheet of paper (if possible)
//Each sheet of paper supports up to 1024 characters
//Print when buffer is full
//Print if unprinted data becomes 10 sec old
//Must accept user input


//ask for user input (no recording of )
window.setInterval(function printer() {
    var info = window.prompt("Please enter your label information");
    alert("You have entered" + info);

    
}, 1000)