let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

/* ==========================
   SAVE TASKS
========================== */

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

/* ==========================
   ADD TASK
========================== */

function addTask(){

const input =
document.getElementById("taskInput");

const taskText =
input.value.trim();

if(taskText === ""){

alert("Please enter a task");

return;

}

tasks.push({

text:taskText,
completed:false

});

saveTasks();

renderTasks(currentFilter);

input.value = "";

}

/* ==========================
   RENDER TASKS
========================== */

function renderTasks(filter = "all"){

currentFilter = filter;

const taskList =
document.getElementById("taskList");

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

if(
filter === "active" &&
task.completed
){
return;
}

if(
filter === "completed" &&
!task.completed
){
return;
}

const li =
document.createElement("li");

if(task.completed){

li.classList.add("completed");

}

li.innerHTML = `

<span onclick="toggleTask(${index})">

${task.text}

</span>

<div>

<button onclick="editTask(${index})">

Edit

</button>

<button onclick="deleteTask(${index})">

Delete

</button>

</div>

`;

taskList.appendChild(li);

});

}

/* ==========================
   DELETE TASK
========================== */

function deleteTask(index){

const confirmDelete =
confirm(
"Are you sure you want to delete this task?"
);

if(confirmDelete){

tasks.splice(index,1);

saveTasks();

renderTasks(currentFilter);

}

}

/* ==========================
   EDIT TASK
========================== */

function editTask(index){

let updatedTask =
prompt(
"Edit your task:",
tasks[index].text
);

if(
updatedTask !== null &&
updatedTask.trim() !== ""
){

tasks[index].text =
updatedTask.trim();

saveTasks();

renderTasks(currentFilter);

}

}

/* ==========================
   COMPLETE TASK
========================== */

function toggleTask(index){

tasks[index].completed =
!tasks[index].completed;

saveTasks();

renderTasks(currentFilter);

}

/* ==========================
   FILTER TASKS
========================== */

function filterTasks(type){

renderTasks(type);

}

/* ==========================
   ENTER KEY SUPPORT
========================== */

document.addEventListener(
"DOMContentLoaded",
()=>{

const input =
document.getElementById("taskInput");

if(input){

input.addEventListener(
"keypress",
(e)=>{

if(e.key === "Enter"){

addTask();

}

}
);

}

renderTasks();

}
);