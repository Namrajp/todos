var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0){
      console.log("The array is empty.Please add some todo!!")
    }
    else{
      console.log("My todos:");
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === false){
          console.log("()",this.todos[i].todoText);
        }  
        else
        {
         console.log("(*)",this.todos[i].todoText); 
        }
      }
    }
     
   }, 
    
  // add todo method adds an object with todoText and boolean val
  addTodos: function (todoText) {
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
  toggleAll: function(){
    var totalCompleted = 0;
    for(var i=0; i < this.todos.length; i++)
    {
      if(this.todos[i].completed === true)
      {
        totalCompleted++;
      }
    }
    //if everything is true make everything false
    if(totalCompleted === this.todos.length){
      for(var i=0; i < this.todos.length; i++){
        this.todos[i].completed = false;
        this.displayTodos();
      } 
    }
    else
      for(var i=0; i < this.todos.length; i++){
        this.todos[i].completed = true;
        this.displayTodos();
      }
    // else make everything true
  }
}



//Refactoring buttons using a object called noname
var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
  addTodos: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodos: function(){
    var changeTodosPositionInput = document.getElementById('changeTodosPositionInput');
    var changeTodosTextInput = document.getElementById("changeTodosTextInput");
    todoList.changeTodos(changeTodosPositionInput.valueAsNumber,changeTodosTextInput.value);
    changeTodosPositionInput.value = "";
    changeTodosTextInput.value = '';
  },
  deleteTodos: function(){
        var deleteTodosPositionInput = document.getElementById('deleteTodosPositionInput');
        todoList.deleteTodos(deleteTodosPositionInput.valueAsNumber);
        changeTodosPositionInput.value = '';
  }

}
// Version 7 - Html and DOM
// • Requirements
// • Html essentials
// • What is DOM
// • There should be a “Display todos “ button and a “Toggle all” buttons in the app
// • Clicking “Display todos” should run todoList.display Todos
// • Clicking “Toggle all” should run todosList.toggleAll
// • Review


