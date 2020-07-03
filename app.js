// Define UI Variables
const form = document.querySelector("form");
const tasklist = document.querySelector(".collection");
const clearTaskBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// ************************************************************************************
// Adding a task function
function addTask(e) {
  if (taskInput.value === "") {
    alert("Please add a task");
  }

  // Task A
  // 1. If there is an input from the form, run this
  const li = document.createElement("li");
  // 2. Add a class to that newly created <li class="collection-item"></li>
  li.className = "collection-item";
  // 3. Create a text node from the taskInput
  li.appendChild(document.createTextNode(taskInput.value));
  // 4. Append that <li> to the tasklist <ul>
  tasklist.appendChild(li);

  // Task B
  // Create a new link element for deleting task
  const link = document.createElement("a");
  // Give a class name
  link.className = "delete-item secondary-content";
  // Add an icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to the li
  li.appendChild(link);

  // Task C
  // Clear input after submitting
  taskInput.value = "";

  // Prevents the default behaviour of a form
  e.preventDefault();
}

// ********************************************************************************
// Remove Single task from the tasklist function
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

// ******************************************************************************

// Clear all task function
function clearTasks(e) {
  tasklist.innerHTML = "";
}

// ********************************************************************************

// Filter through tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// ********************************************************************************

// Load Event Listeners
function loadEventListeners() {
  // Submit a task
  form.addEventListener("submit", addTask);

  //Remove a task
  tasklist.addEventListener("click", removeTask);

  // Clear all task via the Clear Task Button
  clearTaskBtn.addEventListener("click", clearTasks);

  // Filter through tasklist
  filter.addEventListener("keyup", filterTasks);
}

loadEventListeners();

// *******************************************************************************
