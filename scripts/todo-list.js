// create array
const todoList = [{
  name: 'sample todo',
  dueDate: '2022-12-22'
}, {
  name: 'sample todo',
  dueDate: '2022-12-22'
}];

//call the function
renderTodoList();

// render means to show
function renderTodoList(){
//create a variable to accumulate todoList
let todoListHTML = '';

// generate the html
todoList.forEach(function(todoObject,index){
   // destructuring
   const {name, dueDate} = todoObject;
 
   //create a var to insert todo
   const html = `
   <div>${name}</div>
   <div>${dueDate}</div>
   <button onclick="
     todoList.splice(${index}, 1);
     renderTodoList();
   " class="delete-todo-button">Delete</button> 
 `;
   
   // add new todo to current todo
   todoListHTML += html;
});


// use div class js-todo-list inside JavaScript
//using .innerHTML we can display todoListHTML inside the div
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

// function to add todo
function addTodo(){

  // create variable for .js-name-input placeholder using querySelector 
  const inputElement = document.querySelector('.js-name-input');

// create variable for the values of inputElement
  const name = inputElement.value;

  //use dom to use date input in JS
  const dateInputElement = document.querySelector('.js-due-date-input');

// assign variable for input element value
  const dueDate = dateInputElement.value;

//add a value in the array using .push, do it in a object
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    // use shorthand property
    name,
    dueDate
  });
  
  
// empty the input element after pushing
  inputElement.value = '';

//everytime we add a todo, todoList will be displayed
  renderTodoList();
}