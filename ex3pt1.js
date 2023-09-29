let myTasks = [];

//function-adds a string of task into the array
let addTasks = (task) => {
    let length = myTasks.push(task); //push - used to add strinf to the empty array
    console.log("Item" + task + "Has been added to Tasks");
    return length;

}

//function- uses forEach to list all items
let listAllTasks = () => {
    myTasks.forEach((item) => {
        console.log(item);
    })

}

//function -deletes the task 
let deleteTask = (task) => {
    let index = myTasks.indexOf(task);
    if (index > -1) {
        myTasks.splice(index, 1);// uses splice to remove elements
        console.log("Item" + task + "has been removed from task");

    } else {
        console.log("Item" + task + "was not found");
    }
    return myTasks.length;

}



addTasks("Learn JS!");
addTasks("Learn React!");
listAllTasks();
deleteTask("Learn JS!");

