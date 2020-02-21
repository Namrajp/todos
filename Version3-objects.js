
var todoList = {
  todos: ["item 1", "item 2","item 3","item 4"],
  displayTodos: function(){
    console.log("My todos:",this.todos);
  },
  addTodos: function(todo) {
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
  }
  // Version 3: Objects (Requirements)  
  // 1. It should store the todos array on an object
  // 2. It should have a displayTodo method
  // 3. It should have a addTodo method
  // 4. It should have a changeTodo method
  // 5. It should have a deleteTodo method
