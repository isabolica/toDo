let usersChoice = prompt("What would you like to do?");
usersChoice = usersChoice.toLowerCase();

const toDo = [];

while (usersChoice !== "quit" && usersChoice !== "q") {
    if (usersChoice === "quit") break;

    if (usersChoice === "list") {
        if (toDo.length == 0) {
            console.log("You have nothing to do yet!")
        } else {
            console.log("***********");
            for (let i = 0; i < toDo.length; i++) {
                console.log(`${i}: ${toDo[i]}`)
            }
            console.log("***********");
        }
    } else if (usersChoice === "new") {
        const newTodo = prompt("Enter your new todo:");
        if (!newTodo) {
            console.log("Type in something valid to add")
        } else {
            toDo.push(newTodo);
            console.log(`${newTodo} added to list`)
        }
    } else if (usersChoice === "remove") {
        if (toDo.length == 0) {
            console.log("Oops, you have nothing there to remove!")
        } else {
            let indexToRemove = parseInt(prompt("Enter index of the task you want to remove"));
            if (indexToRemove >= 0 && indexToRemove < toDo.length) {
                let removedTask = toDo.splice(indexToRemove, 1);
                console.log(`"${removedTask}" removed from list`)
            } else {
                console.log("I need a valid index")
            }
        }
    }
    usersChoice = prompt("What would you like to do?");
}

console.log("You quit the app, see you next time")