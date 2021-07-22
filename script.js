// SELECTORS

const todoInput = document.getElementById('todo-input');
const todos = document.querySelector('.todos');
const todo = document.querySelector('.todo');
const completed = document.querySelector('.completed');
const uncompleted = document.querySelector('.uncompleted');

//ACUD selectors
const aShort = document.querySelector('#a-short');
const aLong = document.querySelector('#a-long');
const cShort = document.querySelector('#c-short');
const cLong = document.querySelector('#c-long');
const uShort = document.querySelector('#u-short');
const uLong = document.querySelector('#u-long');

// EVENT LISTENERS

// This next event listener has the direct function to change the display of each titles
// and to show the correct to do's, etc. Example: Key C shows title completed
// and short title for All, Uncompleted and Deleted and only the completed to do's.
document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        showUncompleted(e);
        focusInput(e);
        todoInput.value = ' ';
    } else if (e.code === 'Escape') {
        unfocusInput(e);
        todoInput.value = '';
    } else if (e.code === 'KeyA') {
        if (todoInput.value === '') {
            showAll(e);
        } else {
            return;
        }
    } else if (e.code === 'KeyC') {
        if (todoInput.value === '') {
            showCompleted(e);
        } else {
            return;
        }
    } else if (e.code === 'KeyU') {
        if (todoInput.value === '') {
            showUncompleted(e);
        } else {
            return;
        }
    }
});

// This event listener calls the function addTodo, which adds the to do to the list.
todoInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        addTodo(e);
    }
});

// This event listener calls a direct function that makes the numbers work.
// If you are in the uncompleted section it will change the todo to the completed section.
// If you are in the completed section it will delete the todo.
document.addEventListener('keydown', (e) => {
    let i;
    let completed = document.querySelectorAll('.completed');
    let completedArr = Array.from(completed);
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    if (e.code === 'Digit1' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 0;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit1' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 0;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    } else if (e.code === 'Digit2' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 1;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit2' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 1;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    } else if (e.code === 'Digit3' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 2;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit3' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 2;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    } else if (e.code === 'Digit4' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 3;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit4' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 3;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    } else if (e.code === 'Digit5' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 4;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit5' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 4;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    } else if (e.code === 'Digit6' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 5;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit6' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 5;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    } else if (e.code === 'Digit7' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 6;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit7' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 6;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    } else if (e.code === 'Digit8' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 7;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit8' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 7;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    } else if (e.code === 'Digit9' && todoInput.value === '' && aLong.classList.contains('hidden') && cLong.classList.contains('hidden')) {
        i = 8;
        console.log(i);
        uncompletedArr[i].focus();
        completeTodo(uncompletedArr[i]);
    } else if (e.code === 'Digit9' && todoInput.value === '' && aLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
        i = 8;
        console.log(i);
        completedArr[i].focus();
        deleteTodo(completedArr[i]);
    }
});

// FUNCTIONS

// With this onload function we make sure every time the page is refreshed all the uncompleted todos are shown.
window.onload = function () {
    showUncompleted();
};

function showAll() {
    aLong.classList.remove('hidden');
    cShort.classList.remove('hidden');
    uShort.classList.remove('hidden');
    aShort.classList.add('hidden');
    cLong.classList.add('hidden');
    uLong.classList.add('hidden');
    // All completed, uncompleted and deleted todos
    let completed = document.querySelectorAll('.completed');
    let completedArr = Array.from(completed);
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    for (i = 0; i < uncompletedArr.length; i++) {
        uncompletedArr[i].classList.remove('hidden');
    }
    for (i = 0; i < completedArr.length; i++) {
        completedArr[i].classList.remove('hidden');
    }
}
function showCompleted() {
    aShort.classList.remove('hidden');
    cLong.classList.remove('hidden');
    uShort.classList.remove('hidden');
    aLong.classList.add('hidden');
    cShort.classList.add('hidden');
    uLong.classList.add('hidden');
    // All completed, uncompleted and deleted todos
    let completed = document.querySelectorAll('.completed');
    let completedArr = Array.from(completed);
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    for (i = 0; i < uncompletedArr.length; i++) {
        uncompletedArr[i].classList.add('hidden');
    }
    for (i = 0; i < completedArr.length; i++) {
        completedArr[i].classList.remove('hidden');
    }
}
function showUncompleted() {
    aShort.classList.remove('hidden');
    cShort.classList.remove('hidden');
    uLong.classList.remove('hidden');
    aLong.classList.add('hidden');
    cLong.classList.add('hidden');
    uShort.classList.add('hidden');
    // All completed, uncompleted and deleted todos
    let completed = document.querySelectorAll('.completed');
    let completedArr = Array.from(completed);
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    for (i = 0; i < uncompletedArr.length; i++) {
        uncompletedArr[i].classList.remove('hidden');
    }
    for (i = 0; i < completedArr.length; i++) {
        completedArr[i].classList.add('hidden');
    }
}

// Function to focus the input when clicking ENTER
function focusInput() {
    document.getElementById('todo-input').focus();
}

// Function to unfocus the input when clicking ESCAPE
function unfocusInput() {
    document.getElementById('todo-input').blur();
}

// Function that adds a todo to the list
function addTodo() {
    let inputSelect = document.querySelector('#todo-input');
    let inputValue = inputSelect.value.trimStart();
    //To Do div
    const todoDiv = document.createElement('div');
    todoDiv.tabIndex = '1';
    todoDiv.classList.add('todo', 'uncompleted');
    //Create li
    const newTodo = document.createElement('p');
    newTodo.innerText = inputValue;
    newTodo.classList.add('todo-text');
    todoDiv.appendChild(newTodo);
    //Append todo list
    todos.appendChild(todoDiv);
    console.log(inputValue);
    console.log('Works!');
}

// Function to complete a todo
function completeTodo(todo) {
    console.log('Works!');
    todo.classList.remove('uncompleted');
    todo.classList.add('completed');
    todo.classList.add('hidden');
}

// Function for deleting a todo
function deleteTodo(todo) {
    console.log('Works!');
    todo.remove();
}
