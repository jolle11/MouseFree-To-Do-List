// SELECTORS

const todoInput = document.getElementById("todo-input");
const todos = document.querySelector(".todos");
const todo = document.querySelector(".todo");
const completed = document.querySelector(".completed");
const uncompleted = document.querySelector(".uncompleted");
const footer = document.querySelector("footer");

//ACU selectors
const aShort = document.querySelector("#a-short");
const aLong = document.querySelector("#a-long");
const cShort = document.querySelector("#c-short");
const cLong = document.querySelector("#c-long");
const uShort = document.querySelector("#u-short");
const uLong = document.querySelector("#u-long");

// EVENT LISTENERS

// This next event listener has the direct function to change the display of each titles
// and to show the correct to do's, etc. Example: Key C shows title completed
// and short title for All and Uncompleted and only the completed to do's.
document.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		showUncompleted(e);
		focusInput(e);
		todoInput.value = " ";
	} else if (e.code === "Escape") {
		unfocusInput(e);
		todoInput.value = "";
	} else if (e.code === "KeyA") {
		if (todoInput.value === "") {
			showAll(e);
		} else {
			return;
		}
	} else if (e.code === "KeyC") {
		if (todoInput.value === "") {
			showCompleted(e);
		} else {
			return;
		}
	} else if (e.code === "KeyU") {
		if (todoInput.value === "") {
			showUncompleted(e);
		} else {
			return;
		}
	}
});

//Hide or show the key shortcuts
document.addEventListener("keydown", (e) => {
	if (
		e.code === "KeyK" &&
		footer.classList.contains("shown") &&
		todoInput.value === ""
	) {
		console.log("Works");
		footer.classList.remove("shown");
		footer.classList.add("hidden");
	} else {
		footer.classList.add("shown");
		footer.classList.remove("hidden");
	}
});

// This event listener calls the function addTodo, which adds the to do to the list.
todoInput.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		addTodo(e);
	}
});

// This event listener calls a direct function that makes the numbers work.
// If you are in the uncompleted section it will change the todo to the completed section.
// If you are in the completed section it will delete the todo.
document.addEventListener("keydown", (e) => {
	let i;
	let completed = document.querySelectorAll(".completed");
	let completedArr = Array.from(completed);
	let uncompleted = document.querySelectorAll(".uncompleted");
	let uncompletedArr = Array.from(uncompleted);
	if (
		e.code === "Digit1" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 0;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit1" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 0;
		completedArr[i].focus();
		deleteTodo(completedArr[i]);
	} else if (
		e.code === "Digit2" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 1;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit2" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 1;
		completedArr[i].focus();
		deleteTodo(completedArr[i]);
	} else if (
		e.code === "Digit3" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 2;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit3" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 2;
		completedArr[i].focus();
		deleteTodo(completedArr[i]);
	} else if (
		e.code === "Digit4" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 3;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit4" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 3;
		completedArr[i].focus();
		deleteTodo(completedArr[i]);
	} else if (
		e.code === "Digit5" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 4;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit5" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 4;
		completedArr[i].focus();
		deleteTodo(completedArr[i]);
	} else if (
		e.code === "Digit6" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 5;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit6" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 5;
		completedArr[i].focus();
		deleteTodo(completedArr[i]);
	} else if (
		e.code === "Digit7" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 6;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit7" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 6;
		completedArr[i].focus();
		deleteTodo(completedArr[i]);
	} else if (
		e.code === "Digit8" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 7;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit8" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 7;
		completedArr[i].focus();
		deleteTodo(completedArr[i]);
	} else if (
		e.code === "Digit9" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		cLong.classList.contains("hidden")
	) {
		i = 8;
		uncompletedArr[i].focus();
		completeTodo(uncompletedArr[i]);
	} else if (
		e.code === "Digit9" &&
		todoInput.value === "" &&
		aLong.classList.contains("hidden") &&
		uLong.classList.contains("hidden")
	) {
		i = 8;
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
	aLong.classList.remove("hidden");
	cShort.classList.remove("hidden");
	uShort.classList.remove("hidden");
	aShort.classList.add("hidden");
	cLong.classList.add("hidden");
	uLong.classList.add("hidden");
	// All completed and uncompleted todos
	let completed = document.querySelectorAll(".completed");
	let completedArr = Array.from(completed);
	let uncompleted = document.querySelectorAll(".uncompleted");
	let uncompletedArr = Array.from(uncompleted);
	for (i = 0; i < uncompletedArr.length; i++) {
		uncompletedArr[i].classList.remove("hidden");
	}
	for (i = 0; i < completedArr.length; i++) {
		completedArr[i].classList.remove("hidden");
	}
}

function showCompleted() {
	aShort.classList.remove("hidden");
	cLong.classList.remove("hidden");
	uShort.classList.remove("hidden");
	aLong.classList.add("hidden");
	cShort.classList.add("hidden");
	uLong.classList.add("hidden");
	// All completed and uncompleted todos
	let completed = document.querySelectorAll(".completed");
	let completedArr = Array.from(completed);
	let uncompleted = document.querySelectorAll(".uncompleted");
	let uncompletedArr = Array.from(uncompleted);
	for (i = 0; i < uncompletedArr.length; i++) {
		uncompletedArr[i].classList.add("hidden");
	}
	for (i = 0; i < completedArr.length; i++) {
		completedArr[i].classList.remove("hidden");
	}
}

function showUncompleted() {
	aShort.classList.remove("hidden");
	cShort.classList.remove("hidden");
	uLong.classList.remove("hidden");
	aLong.classList.add("hidden");
	cLong.classList.add("hidden");
	uShort.classList.add("hidden");
	// All completed and uncompleted todos
	let completed = document.querySelectorAll(".completed");
	let completedArr = Array.from(completed);
	let uncompleted = document.querySelectorAll(".uncompleted");
	let uncompletedArr = Array.from(uncompleted);
	for (i = 0; i < uncompletedArr.length; i++) {
		uncompletedArr[i].classList.remove("hidden");
	}
	for (i = 0; i < completedArr.length; i++) {
		completedArr[i].classList.add("hidden");
	}
}

function focusInput() {
	document.getElementById("todo-input").focus();
}

function unfocusInput() {
	document.getElementById("todo-input").blur();
}

function addTodo() {
	let inputSelect = document.querySelector("#todo-input");
	let inputValue = inputSelect.value.trimStart();
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo", "uncompleted");
	const newTodo = document.createElement("p");
	newTodo.innerText = inputValue;
	newTodo.classList.add("todo-text");
	todoDiv.appendChild(newTodo);
	todos.appendChild(todoDiv);
}

function completeTodo(todo) {
	todo.classList.remove("uncompleted");
	todo.classList.add("completed");
	todo.classList.add("hidden");
}

function deleteTodo(todo) {
	todo.remove();
}
