// Add task function
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `${taskText} 
        <button class="btn btn-danger btn-sm" onclick="removeTask(this)">❌</button>
        <button class="btn btn-primary btn-sm" onclick="completeTask(this)">✔️</button>`;
    
    taskList.appendChild(li);
    taskInput.value = "";
}

// Remove task function
function removeTask(button) {
    button.parentElement.remove();
}

// Mark task as complete
function completeTask(button) {
    let task = button.parentElement;
    task.classList.toggle("completed");
}

// Focus Mode Toggle
document.getElementById("focus-mode-toggle").addEventListener("click", function() {
    let focusDiv = document.createElement("div");
    focusDiv.id = "focus-mode";
    focusDiv.innerText = "Focus Mode Active - Stay on Task!";
    document.body.appendChild(focusDiv);
    
    setTimeout(() => {
        document.body.removeChild(focusDiv);
    }, 5000);
});
