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
  }
 
}
// Version 5 - Loops of Logic
// • The for loop
// • Looping over arrays
// • Requirements
// • displayTodos should show todoText
// • displayTodos should tell you if todos is empty
// • displayTodos should show completed 

