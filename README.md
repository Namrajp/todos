# Steps to the learn in Essential Javascript
## Version 1
Uses just statements
Declare array todos = ["task 1","task 2","task 3"]; and console.log("My Todos: ",todos)
## Version 2 
Shoud use functions 
## Version 3
	Objects organize functions as methods and also condense data in arrays with methods into a single block called object -- Plunker https://plnkr.co/ or
	codepen can be used for online editing.
---
## Version 4 - Booleans
### Requirements methods to do tasks on the data manipulation
* todoList.addTodo should add objects or this.addTodos()
* todoList.changeTodos should change the todoText property or this.method()
* todoList.toggleCompleted should flip the completed property or this.method()
* Review

## Version 5 - Loops of Logic
### The for loop
*	Looping over arrays
*	Requirements
*	displayTodos should show todoText
*	displayTodos should tell you if todos is empty
*	displayTodos should show completed 
---
## Version 6 - Thinking in Code
*	Requirements
*	toggleAll: if everything is true,make everything false
*	toggleAll: Otherwise make everything true
*	Review
---
## Version 7 - Html and DOM
*	Requirements
*	Html essentials
*	What is DOM
*	There should be a “Display todos “ button and a “Toggle all” buttons in the app
*	Clicking “Display todos” should run todoList.display Todos
*	Clicking “Toggle all” should run todosList.toggleAll
*	Review
---
## Version 8- Getting data from input 

* Out first refactoring - More on refactoring -Requirements 

* There should be a button for adding todos 

* There should be a button for changing todos 

* There should be a button for deleting todos 

* There should be a button for toggling a todo 
---
## Escape from the console 

* Requirements 

* Inserting li elements into the DOM 

* There should be an li element for every todo 

* Each li element should contain .todoText 

* Each li element should show .completed 
---
## Escaping the console 

* Review - Interlude-Functions inside of functions 

* runWithDebugger 

* setTimeout 

* forEach 

* addEventListener 

* Buzzwords: Higher order functions and callback functions 
---
## Version 10- Click to delete 

* The ‘return’ statement 

* Requirements 

* There should be a way to create delete buttons 

* There should be a delete buttons for each todo 

* Each li should have a id that has the todo position 

* Delete buttons should have access to the todo id 

* Clicking delete should update todoList.todos and the DOM 

* Cleanup and Review 
---
## Version 11 – Destroy all for loops 

* Requirements 

* todoList.toggleAll should use forEach 

* view.displayTodos should use forEach 

* Review 

* Interlude- understanding *this* 
---
## The cheatsheet 

* Case 1: In a regular function 

* Case 2: When a function is called as a method (1:15) 

* Case 3: When a function is called as a constructor (5:11) 

* Case 4: When you explicitly set the value of  ‘this’ with bind, apply, or call (10:41) 

* Case 5: when you’re in a callback function 
