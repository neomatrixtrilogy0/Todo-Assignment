//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo)


//functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    
    //todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create LI(list items)
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<li class="fas fa-check"></li>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fas fa-trash"></li>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);
}