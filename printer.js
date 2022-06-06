//Multiple labels printed on one sheet of paper (if possible)
//Each sheet of paper supports up to 1024 characters
//Print when buffer is full
//Print if unprinted data becomes 10 sec old
//Must accept user input


//ask for user input (rules do not specify whether this needs to be ongoing input, so just asking once!)
function printer() {
    var info = window.prompt("Please enter your label information");
    //if info is > 1024 characters then move labels onto separate pages
    //since I am printing to the console, I'll just log that we are entering new page territory
    if (info.length>1024) {
        console.log("printing on a new page")
    } console.log(info);
    var yesorno = window.confirm("Would you like to enter another label?")
    if (yesorno) {
        return printer()
    };
    //output user input to print request
    // window.print(info);
    //for practicality, sending info to console
    //since the console should print the data as soon as it's entered, this would fulfill the printing when buffer is full
}
