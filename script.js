// SELECTORS

const todoInput = document.getElementById('todo-input');
const todos = document.querySelector('.todos');

//ACUD selectors
const aShort = document.querySelector('#a-short');
const aLong = document.querySelector('#a-long');
const cShort = document.querySelector('#c-short');
const cLong = document.querySelector('#c-long');
const uShort = document.querySelector('#u-short');
const uLong = document.querySelector('#u-long');
const dShort = document.querySelector('#d-short');
const dLong = document.querySelector('#d-long');

// EVENT LISTENERS

// This next event listener has the direct function to change the display of each titles
// and to show the correct to do's. Example: Key C shows title completed
// and short title for All, Uncompleted and Deleted and only the completed to do's.
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
        showUncompleted(e);
        focusInput(e);
        todoInput.value = ' ';
    } else if (e.key === 'Escape' || e.code === 'Escape') {
        unfocusInput(e);
        todoInput.value = '';
    } else if (e.key === 'a' || e.code === 'KeyA') {
        if (todoInput.value === '') {
            showAll(e);
        } else {
            return;
        }
    } else if (e.key === 'c' || e.code === 'KeyC') {
        if (todoInput.value === '') {
            showCompleted(e);
        } else {
            return;
        }
    } else if (e.key === 'u' || e.code === 'KeyU') {
        if (todoInput.value === '') {
            showUncompleted(e);
        } else {
            return;
        }
    } else if (e.key === 'd' || e.code === 'KeyD') {
        if (todoInput.value === '') {
            showDeleted(e);
        } else {
            return;
        }
    }
});

// This event listener calls the function addTodo, which adds the to do to the list.
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
        addTodo(e);
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
    dShort.classList.remove('hidden');
    aShort.classList.add('hidden');
    cLong.classList.add('hidden');
    uLong.classList.add('hidden');
    dLong.classList.add('hidden');
    // All completed, uncompleted and deleted todos
    const completed = document.querySelectorAll('.completed');
    const completedArr = Array.from(completed);
    const uncompleted = document.querySelectorAll('.uncompleted');
    const uncompletedArr = Array.from(uncompleted);
    const deleted = document.querySelectorAll('.deleted');
    const deletedArr = Array.from(deleted);
    for (i = 0; i < uncompletedArr.length; i++) {
        uncompletedArr[i].classList.remove('hidden');
    }
    for (i = 0; i < completedArr.length; i++) {
        completedArr[i].classList.remove('hidden');
    }
    for (i = 0; i < deletedArr.length; i++) {
        deletedArr[i].classList.remove('hidden');
    }
}
function showCompleted() {
    aShort.classList.remove('hidden');
    cLong.classList.remove('hidden');
    uShort.classList.remove('hidden');
    dShort.classList.remove('hidden');
    aLong.classList.add('hidden');
    cShort.classList.add('hidden');
    uLong.classList.add('hidden');
    dLong.classList.add('hidden');
    // All completed, uncompleted and deleted todos
    const completed = document.querySelectorAll('.completed');
    const completedArr = Array.from(completed);
    const uncompleted = document.querySelectorAll('.uncompleted');
    const uncompletedArr = Array.from(uncompleted);
    const deleted = document.querySelectorAll('.deleted');
    const deletedArr = Array.from(deleted);
    for (i = 0; i < uncompletedArr.length; i++) {
        uncompletedArr[i].classList.add('hidden');
    }
    for (i = 0; i < completedArr.length; i++) {
        completedArr[i].classList.remove('hidden');
    }
    for (i = 0; i < deletedArr.length; i++) {
        deletedArr[i].classList.add('hidden');
    }
}
function showUncompleted() {
    aShort.classList.remove('hidden');
    cShort.classList.remove('hidden');
    uLong.classList.remove('hidden');
    dShort.classList.remove('hidden');
    aLong.classList.add('hidden');
    cLong.classList.add('hidden');
    uShort.classList.add('hidden');
    dLong.classList.add('hidden');
    // All completed, uncompleted and deleted todos
    const completed = document.querySelectorAll('.completed');
    const completedArr = Array.from(completed);
    const uncompleted = document.querySelectorAll('.uncompleted');
    const uncompletedArr = Array.from(uncompleted);
    const deleted = document.querySelectorAll('.deleted');
    const deletedArr = Array.from(deleted);
    for (i = 0; i < uncompletedArr.length; i++) {
        uncompletedArr[i].classList.remove('hidden');
    }
    for (i = 0; i < completedArr.length; i++) {
        completedArr[i].classList.add('hidden');
    }
    for (i = 0; i < deletedArr.length; i++) {
        deletedArr[i].classList.add('hidden');
    }
}
function showDeleted() {
    aShort.classList.remove('hidden');
    cShort.classList.remove('hidden');
    uShort.classList.remove('hidden');
    dLong.classList.remove('hidden');
    aLong.classList.add('hidden');
    cLong.classList.add('hidden');
    uLong.classList.add('hidden');
    dShort.classList.add('hidden');
    // All completed, uncompleted and deleted todos
    const completed = document.querySelectorAll('.completed');
    const completedArr = Array.from(completed);
    const uncompleted = document.querySelectorAll('.uncompleted');
    const uncompletedArr = Array.from(uncompleted);
    const deleted = document.querySelectorAll('.deleted');
    const deletedArr = Array.from(deleted);
    for (i = 0; i < uncompletedArr.length; i++) {
        uncompletedArr[i].classList.add('hidden');
    }
    for (i = 0; i < completedArr.length; i++) {
        completedArr[i].classList.add('hidden');
    }
    for (i = 0; i < deletedArr.length; i++) {
        deletedArr[i].classList.remove('hidden');
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

// The next function adds a todo to the list
function addTodo() {
    inputSelect = document.querySelector('#todo-input');
    inputValue = inputSelect.value.trimStart();
    //To Do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('uncompleted');
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
