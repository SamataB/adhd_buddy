// Add Task Function
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} 
        <button class="delete-btn" onclick="removeTask(this)">❌</button>`;
    
    taskList.appendChild(li);
    taskInput.value = "";
}

// Remove Task
function removeTask(button) {
    button.parentElement.remove();
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
