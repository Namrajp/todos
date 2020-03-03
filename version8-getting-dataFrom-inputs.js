<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Version 8 Getting input data from page using handlers.methods() to render data. </title>
</head>
<body>
<!--   Requirements Version 7: 
1.There should be a "Display todos" and a "Toggle all" button in the app
2. Clicking 'Display todos' should run todoList.displayTodos
3. Clicking 'Toggle all' should run todoList.toggleAll
 -->  <button onclick="handlers.toggleAll()">Toggle All</button>
  <button onclick="handlers.displayTodos()">Display All</button>
  <div>
    <button onclick="handlers.addTodos()">Add</button>
    <input type="text" id="addTodosButtonsInput">
  </div>

  <div>
    <button onclick="handlers.changeTodos()">Change</button>
    <input type="number" id="changeTodosPositionInput">
    <input type="text" id="changeTodosTextInput">
  </div>

  <div>
    <button onclick="handlers.deleteTodos()">Delete</button>
    <input type="number" id= 'deleteTodosPositionInput'>
  </div>

  <div>
    <button onclick="handlers.toggleCompleted()">toggle Completed</button>
    <input type="number" id= 'toggleTodosPositionInput'>
  </div>
<script>
var todoList = {
  todos: [],
  displayTodos: function () {
     if(this.todos.length === 0){
      console.log("Your Todo list is empty!");
      } else {
        console.log("My Todos:");
        for (var i=0; i < this.todos.length; i++) {
           if (this.todos[i].completed === true){
             console.log("(x)",this.todos[i].todoText);
          } else {
           console.log("()",this.todos[i].todoText);
          }
        }
      }
    },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  // change todos of todoText
  changeTodos: function(position,newTodo) {
    this.todos[position].todoText = newTodo;
    this.displayTodos();
  },
  deleteTodos: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
       var totalTodos = this.todos.length;
       var completedTodos = 0;
     
     // Get number of completedTodos 
      for (var i=0; i< totalTodos; i++) {
        if (this.todos[i].completed === true){
          completedTodos++;
        }
      }
      
     // Case 1: If everything's true, make everything false
     if (completedTodos === totalTodos){
       for (var i=0; i< totalTodos; i++){
         this.todos[i].completed = false;
       }
    }
    // Case 2: Otherwise, make everything true
    else {
      for (var i=0; i< totalTodos; i++) {
        this.todos[i].completed = true;
      }     
   }
    this.displayTodos();
  }
};  
 //We create handler to optimize the use of document.getElementById
  //and remove the necessacity of using html button id, addEventListener('click', function(){}
  var handlers = {
    displayTodos: function() {
      todoList.displayTodos();
    },

    addTodos: function(){
      var addTodosButtonsInput = document.getElementById('addTodosButtonsInput');
            todoList.addTodos(addTodosButtonsInput.value);
            addTodosButtonsInput.value = '';

    },
    changeTodos: function(){
      changeTodosPositionInput = document.getElementById('changeTodosPositionInput');
      changeTodosTextInput = document.getElementById('changeTodosTextInput');
      todoList.changeTodos(changeTodosPositionInput.valueAsNumber,changeTodosTextInput.value);
      changeTodosPositionInput.value = '';
      changeTodosTextInput.value = '';
    }, 
    deleteTodos: function(){
      deleteTodosPositionInput = document.getElementById('deleteTodosPositionInput');
      todoList.deleteTodos(deleteTodosPositionInput.valueAsNumber);
    },
    toggleCompleted: function(){
      toggleTodosPositionInput = document.getElementById('toggleTodosPositionInput');
      todoList.toggleCompleted(toggleTodosPositionInput.valueAsNumber);
    },
    toggleAll: function(){
      todoList.toggleAll();
    }
  };

    </script>
  </body>
</html>
