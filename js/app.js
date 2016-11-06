// Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task');
var addButton = document.getElementByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');
// Add a new task
	// Create a task when button is pressed (list item)
var addTask = function() {
	// New list item with:
	 	//check box 
	 	//label 
	 	//text input 
	 	//edit button 
	 	//delete button
	 	//each element needs to be modified and appended
}

// Edit an existing task
	// When edit button is pressed
var editTask = function(){
		// if the class of parent is .editMode
			// Switch from .editMode
			// label text becomes the input's value
		// else
			// Switch to .editMode
			// Input value becomes label text

		// Toggle .editMode on the parent
}

// Delete an existing task
	// When delete button is pressed
var deleteTask = function(){
		// Remove parent list item from ul
}

// Mark a task as complete
	// When the checkbox is checked
var taskCompleted = function(){
		// Append the task list item to the #completed-tasks
}


// Mark a task as incomplete
	// When the checkbox is unchecked
var taskIncomplete = function(){
		// Append the task list item to the #incomplete-tasks
}