// SELECTORS

const todoInput = document.getElementById('todo-input');
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

document.addEventListener(
    'keydown',
    (event) => {
        var name = event.key;
        var code = event.code;
        if (name === 'a' || code === 'KeyA') {
            aLong.classList.remove('hidden');
            cShort.classList.remove('hidden');
            uShort.classList.remove('hidden');
            dShort.classList.remove('hidden');
            aShort.classList.add('hidden');
            cLong.classList.add('hidden');
            uLong.classList.add('hidden');
            dLong.classList.add('hidden');
        } else if (name === 'c' || code === 'KeyC') {
            aShort.classList.remove('hidden');
            cLong.classList.remove('hidden');
            uShort.classList.remove('hidden');
            dShort.classList.remove('hidden');
            aLong.classList.add('hidden');
            cShort.classList.add('hidden');
            uLong.classList.add('hidden');
            dLong.classList.add('hidden');
        } else if (name === 'u' || code === 'KeyU') {
            aShort.classList.remove('hidden');
            cShort.classList.remove('hidden');
            uLong.classList.remove('hidden');
            dShort.classList.remove('hidden');
            aLong.classList.add('hidden');
            cLong.classList.add('hidden');
            uShort.classList.add('hidden');
            dLong.classList.add('hidden');
        } else if (name === 'd' || code === 'KeyD') {
            aShort.classList.remove('hidden');
            cShort.classList.remove('hidden');
            uShort.classList.remove('hidden');
            dLong.classList.remove('hidden');
            aLong.classList.add('hidden');
            cLong.classList.add('hidden');
            uLong.classList.add('hidden');
            dShort.classList.add('hidden');
        }
    },
    false
);

// FUNCTIONS

window.onload = function () {
    aShort.classList.add('hidden');
    cLong.classList.add('hidden');
    uLong.classList.add('hidden');
    dLong.classList.add('hidden');
};
