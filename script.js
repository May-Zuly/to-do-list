//Function to handle task completion and removal
function handleTaskClick(event) {
    // Toggle 'completed' class to style completed tasks differently
    event.target.classList.toggle("completed");
  }

 // Function to remove a task
 function removeTask(event) {
    event.stopPropagation(); // Prevent event bubbling to the parent li element
    event.target.parentNode.remove(); // Remove the parent li element
  }

const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("list-container");
const emptyMessage = document.getElementById("empty-sms");

addBtn.addEventListener("click",function(){
    var taskText = inputBox.value.trim();
    if(taskText !==""){
        addTask(taskText);
        inputBox.value="";
        emptyMessage.textContent="";
    }else{
        emptyMessage.textContent="You must write something!";
    }
 
})



function addTask(text) {
    var li = document.createElement("li");
    li.className="todo-item";
    li.textContent=text;
    li.addEventListener("click",handleTaskClick);

    // var deleteBtn = document.createElement("button");
    // deleteBtn.className="delete-btn";
    // deleteBtn.textContent="x";
    // deleteBtn.classList.add("deleteBtn");
    var span = document.createElement("span");
    span.textContent ="\u00d7";
    span.classList.add("span");
   

    span.addEventListener("click",removeTask);
    li.appendChild(span);
    listContainer.appendChild(li);

}

// li.addEventListener('keypress',addListItemOnEnter);

// function addListItemOnEnter(event) {
//     if (taskText !=="") {
//         addTask(taskText);
//         li.value="";
//         emptyMessage.textContent="";
//     } else {
//         emptyMessage.textContent="You must write something!";
//     }
    
// }

function clearTask() {
    listContainer.replaceChildren();

}

