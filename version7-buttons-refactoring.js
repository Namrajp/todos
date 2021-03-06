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



//Refactoring code and  adding buttons control using a object called handlers
var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
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
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
  toggleCompleted: function(){
    var toggleCompletedTextInput = document.getElementById('toggleCompletedTextInput');
    todoList.toggleCompleted(toggleCompletedTextInput.valueAsNumber);
    toggleCompletedTextInput.value = '';
  }

}
// Version 8- Getting data from input
// • Out first refactoring
// • More on refactoring
// • Requirements
// • There should be a button for adding todos
// • There should be a button for changing todos
// • There should be a button for deleting todos
// • There should be a button for toggling a todo
