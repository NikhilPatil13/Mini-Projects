// functions logic


// required variable declaration
let allTasks = [] // to store all tasks
let nextId = 1 // keep track of id's of tasks -> starts from 1 and we will increment for each new task


// function to add new task
/*
    function name - addTask
    parameters - newTaskTitle:string
    returns - added task:object
*/
function addTask(newTaskTitle){
    // test
    console.log("addTask called...")
    // check newTaskTitle is empty or not
    if(typeof(newTaskTitle) != 'string'){
        return false // return false for type error
    }
    else{
        // trim starting and ending spaces
        newTaskTitle = newTaskTitle.trim()
        
        // checking size of newTaskTitle
        if(newTaskTitle.length==0){
            return false // returns false for size error
        }
        else{
            // creating an object for newTaskTitle
            // {id:number , title:string , isCompleted:boolean , createdAt:datestring}
            let taskToAdd = {
                id : nextId++,
                title : newTaskTitle,
                isCompleted : false,
                createdAt : new Date().toLocaleString()
            }


            // add taskToAdd in allTasks array
            allTasks.push(taskToAdd)

            // returning added task
            return taskToAdd
        }
    }
}


// function to list all tasks
/*
    function name - listTasks
    parameters - nothing
    returns - allTasks: array of objects
*/
function listTasks(){
    // test
    console.log("listTasks called...")

    // returning shallow copy of allTasks
    let allTasksCpy = Array.from(allTasks)

    return allTasksCpy
}


// function to complete task having provided id
/*
function name - completeTask
parameters - id
returns - completed task : task object
*/
function completeTask(taskId){
    //console.log(taskId)
    // validating type of id
    if(typeof taskId !='number' || taskId<=0 || Number.isNaN(taskId)){
        return false
    }

    // finding task having same id matches with provided id
    let foundObj = allTasks.find((taskObj)=> taskObj.id===taskId);

    // checking foundObj's value and foundObj's isComplete status
    if(foundObj!=undefined && !foundObj.isCompleted){
        foundObj.isCompleted = true
        return foundObj
    }
    else{
        return false
    }
}


// function to delete task having provided id
/*
function name - deleteTask
parameters - id
returns - true : if deleted
*/
function deleteTask(taskId){
    // validate taskId
    if(typeof taskId!='number' || Number.isNaN(taskId) || taskId<=0){
        return false
    }
    
    // finding task having provided taskId
    let foundObj = allTasks.find((taskObj)=>taskObj.id===taskId)

    // checking foundObj is found or not
    if(foundObj!=undefined){
  
        // traversing allTasks
        allTasks = allTasks.filter((taskObj)=> taskObj.id!=foundObj.id)

        /*
        // taking an tempTasksArray
        let tempTasksArray = []
        allTasks.forEach((taskObj)=>{
            if(taskObj.id!=foundObj.id){
                // we need to skip provided id's task - means it considered as task deleted
                tempTasksArray.push(taskObj)
            }
        })
            
        
        // assigning tempTasksArray to allTasks
        allTasks =  Array.from(tempTasksArray)
        */

        return true
    }
    else{
        return false
    }
}


// temporary calling above functions
console.log(addTask("Wish Birthday To Someone"))
console.log("----------------------------------")

listTasks().forEach((taskObj)=>{
    console.log(taskObj)
})
console.log("----------------------------------")

console.log(completeTask(1))
console.log("----------------------------------")

console.log(deleteTask(1))
