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

// This next event listener has the function to change the display of each titles
// and to show the correct to do's. Example: Key C shows title completed
// and short title for All, Uncompleted and Deleted and only the completed to do's.
document.addEventListener('keydown', (e) => {
    if ((e.key === 'a' && todoInput.value === '') || (e.code === 'KeyA' && todoInput.value === '')) {
        showAll(e);
    } else if ((e.key === 'c' && todoInput.value === '') || (e.code === 'KeyC' && todoInput.value === '')) {
        showCompleted(e);
    } else if ((e.key === 'u' && todoInput.value === '') || (e.code === 'KeyU' && todoInput.value === '')) {
        showUncompleted(e);
    } else if ((e.key === 'd' && todoInput.value === '') || (e.code === 'KeyD' && todoInput.value === '')) {
        showDeleted(e);
    }
});

// This event listener adds the to do to the list.
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
        //Checks whether the pressed key is "Enter"
        addTodo(e);
    }
});

// FUNCTIONS

// With this onload function we make sure every time the page is refreshed all the todos are shown
window.onload = function () {
    aLong.classList.add('hidden');
    cLong.classList.add('hidden');
    uShort.classList.add('hidden');
    dLong.classList.add('hidden');
    inputSelect = document.querySelector('#todo-input');
    inputSelect.value = '';
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
}

// The next function adds a to do to the list
function addTodo() {
    inputSelect = document.querySelector('#todo-input');
    inputValue = inputSelect.value;
    console.log(inputValue);
    console.log('Works!');
}
