// SELECTORS

const todoInput = document.getElementById('todo-input');
const todos = document.querySelector('.todos');
const todo = document.querySelector('.todo');
const completed = document.querySelector('.completed');
const uncompleted = document.querySelector('.uncompleted');
const deleted = document.querySelector('.deleted');
let count = 0;

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
    } else if (e.code === 'KeyD') {
        if (todoInput.value === '') {
            showDeleted(e);
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

// The next event listener allows you with a direct function to jump between todos with Up and Down arrows
// 1ST Part
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowDown' && todoInput.value === '') {
        console.log('Arrowdown');
        // All completed, uncompleted and deleted todos
        let completed = document.querySelectorAll('.completed');
        let completedArr = Array.from(completed);
        let uncompleted = document.querySelectorAll('.uncompleted');
        let uncompletedArr = Array.from(uncompleted);
        let deleted = document.querySelectorAll('.deleted');
        let deletedArr = Array.from(deleted);
        if (aLong.classList.contains('hidden') && cLong.classList.contains('hidden') && dLong.classList.contains('hidden')) {
            uncompletedArr[count].focus();
        }
        if (aLong.classList.contains('hidden') && uLong.classList.contains('hidden') && dLong.classList.contains('hidden')) {
            completedArr[count].focus();
        }
        if (aLong.classList.contains('hidden') && cLong.classList.contains('hidden') && uLong.classList.contains('hidden')) {
            deletedArr[count].focus();
        }
    }
});

todo.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowDown') {
        let uncompleted = document.querySelectorAll('.uncompleted');
        let uncompletedArr = Array.from(uncompleted);
        console.log(count);
        count++;
        console.log(count);
        uncompletedArr[count].focus();
        // for (i = 0; i < uncompletedArr.length; i++) {
        //     if (e.code === 'ArrowDown') {
        //         console.log(count);
        //         uncompletedArr[i].focus();
        //         count += 1;
        //         console.log(count);
        //     } else if (e.code === 'ArrowDown') {
        //         uncompletedArr[i].blur();
        //     }
        // }
    }
});
////////////////////////////////////////////////////////////////////////////////////////
// EVENT LISTENER THAT WILL CALL THE FUNCTION FOR THE NUMBERS TO JUMP BETWEEN TODOS ////
////////////////////////////////////////////////////////////////////////////////////////

// todo.addEventListener('keydown', (e) => {
//     if (e.code === 'KeyF') {
//         completeTodo();
//     } else if (e.code === 'Backspace') {
//         deleteTodo(e);
//     } else if (e.code === 'KeyE') {
//         editTodo(e);
//     } else if (e.code === 'KeyR') {
//         resetTodo(e);
//     } else if (e.code === 'Escape') {
//         unfocusTodo(e);
//     }
// });

uncompleted.addEventListener('keydown', (e) => {
    if (e.code === 'KeyF') {
        console.log('FFFFFFFFF! ');
        completeTodo();
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
    let completed = document.querySelectorAll('.completed');
    let completedArr = Array.from(completed);
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    let deleted = document.querySelectorAll('.deleted');
    let deletedArr = Array.from(deleted);
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
    let completed = document.querySelectorAll('.completed');
    let completedArr = Array.from(completed);
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    let deleted = document.querySelectorAll('.deleted');
    let deletedArr = Array.from(deleted);
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
    let completed = document.querySelectorAll('.completed');
    let completedArr = Array.from(completed);
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    let deleted = document.querySelectorAll('.deleted');
    let deletedArr = Array.from(deleted);
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
    let completed = document.querySelectorAll('.completed');
    let completedArr = Array.from(completed);
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    let deleted = document.querySelectorAll('.deleted');
    let deletedArr = Array.from(deleted);
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
function completeTodo() {
    let uncompleted = document.querySelectorAll('.uncompleted');
    let uncompletedArr = Array.from(uncompleted);
    console.log('Works!');
    uncompletedArr[0].classList.remove('uncompleted');
    uncompletedArr[0].classList.add('completed');
    uncompletedArr[0].classList.add('hidden');
}

//sdfgdsfgsd
function deleteTodo() {}

function editTodo() {}

function resetTodo() {}

function unfocusTodo() {}
