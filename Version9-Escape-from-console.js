var todoList = {
  todos: [], 
  // add todo method adds an object with todoText and boolean val
  addTodos: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  // change todos of todoText
  changeTodos: function(position,newTodo) {
    this.todos[position].todoText = newTodo;
  },
  deleteTodos: function(position) {
    this.todos.splice(position,1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
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
      } 
    }
    else
      for(var i=0; i < this.todos.length; i++){
        this.todos[i].completed = true;
      }
    // else make everything true
  }
};



//Refactoring buttons using a object called noname
var handlers = {
  addTodos: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodos: function(){
    var changeTodosPositionInput = document.getElementById('changeTodosPositionInput');
    var changeTodosTextInput = document.getElementById("changeTodosTextInput");
    todoList.changeTodos(changeTodosPositionInput.valueAsNumber,changeTodosTextInput.value);
    changeTodosPositionInput.value = "";
    changeTodosTextInput.value = '';
    view.displayTodos();
  },
  deleteTodos: function(){
        var deleteTodosPositionInput = document.getElementById('deleteTodosPositionInput');
        todoList.deleteTodos(deleteTodosPositionInput.valueAsNumber);
        changeTodosPositionInput.value = '';
        view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedTextInput = document.getElementById('toggleCompletedTextInput');
    todoList.toggleCompleted(toggleCompletedTextInput.valueAsNumber);
    toggleCompletedTextInput.value = '';
    view.displayTodos();
  }

};

// •	Requirements
// •	Inserting li elements into the DOM
// •	There should be an li element for every todo
// •	Each li element should contain .todoText
// •	Each li element should show .completed
// •	Escaping the console
// •	Review

var view = {
	displayTodos: function(){
		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';

		for(var i = 0; i < todoList.todos.length;i++) {
			var textCompleted = '';

			if(todoList.todos[i].completed === true){
				textCompleted = '( * )' + todoList.todos[i].todoText;
			} else {
				textCompleted = '(  )' + todoList.todos[i].todoText;
			}

			var todoLi = document.createElement('li');
			todoLi.textContent = textCompleted;
			todoUl.appendChild(todoLi);
		}

	}
};














