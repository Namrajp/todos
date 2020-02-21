// Boolean
// Boolean
// Our objects should store data as objects inside an array
var todoList = {
  todos: [],
  displayTodos: function(){
    console.log("My todos:",this.todos);
  },

  // add todo method adds objects,this method pushes a string 
  //text and a boolean value that tracks completion of todo task.

  addTodos: function(todoText){
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
  }
 
}