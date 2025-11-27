// this file contains code which converts a string into an object of command and task title

// function to convert inputed string into an object
/*
    function name - parseCommand
    parameters - inputedString : string
    returns - an object : contains command and task title as arg array
*/
function parseCommand(inputedString="add buy milk"){
    // checking length of inputedString and validated type
    if(typeof(inputedString)!='string'){
        return null
    }

    // trimming extra spaces in inputedString
    inputedString = inputedString.trim()

    if(inputedString.length===0){
        return null
    }

    // converting inputedString into an Array
    /*
        input : add buy milk
        ->
            command : "add"
            args : ["buy milk"]

        input : list
        ->
            command : list
            args : []
    */
    // splits the inputedString having seperator " "
    let stringWordArray = inputedString.split(" ")
 

    // taking first word i.e. 0th index element as command
    // removing 0th index element and store for command
    let commandWord = stringWordArray.shift()
    
    console.log("in parse command method : "+commandWord+" - "+stringWordArray)

    // array to store arguments if present else send empty array
    let argArray = []

    // checking current length of stringWordArray
    if(stringWordArray.length!=0){
         // create a string of remaning elements in stringWordArray
    
        let argString = stringWordArray.join(" ")// using " " as seperator to keep space between words

        // an array to pass as args argument in object
        argArray = [argString]
    }
   
    // returning an object
    return {command : commandWord , args : argArray}
}


// --- test ---
console.log(parseCommand("complete 1"))