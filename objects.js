
var todoList = {
  todos: ["item 1", "item 2","item 3","item 4"],
  displayTodos: function () {
    console.log("My todos:",this.todos);
  },
  addTodos: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodos: function(position,newTodo) {
    this.todos[position] = newTodo;
    this.displayTodos();
  },
  deleteTodos: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  }
  // // Delete todos
  // function deleteTodos(position){
  //   todos.splice(position,1);
  //   displayTodos();
  // }
}