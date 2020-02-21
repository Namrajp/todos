// Version 2- Functions (Requirements:-) 
// 1. We need a array to store our todos tasks, so we use array todos
// 2. It should have a function to display todos
// 3. It should have a function to add todos
// 4. It should have a funciton to change todos
// 4. It should have a funciton to delete todos

var todos = ["Item 1","Item 2","Item 3","Item 4"];

function displayTodos(){
	console.log("My Todos:",todos);
}

function addTodos(todoItem){
	todos.push(todoItem);
	displayTodos();
}

function changeTodos(position,newItem){
	todos[position] = newItem;
	displayTodos();
}

function deleteTodos(position){
	todos.splice(position,1);
	displayTodos();
}

// display todo function needs no argument to print todos
// addTodos takes one todoItem as argument which is string
// changeTodo and deleteTodos takes a number and a string to
// represent position of todo item in Array and next argument. 
