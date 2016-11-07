// Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task');
var addButton = document.getElementById('addbutton');
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');
// Add a new task
	// Create a task when button is pressed (list item)
var addTask = function() {
	console.log('Add task...');
	// New list item with:
	 	//check box 
	 	//label 
	 	//text input 
	 	//edit button 
	 	//delete button
	 	//each element needs to be modified and appended
};

// Edit an existing task
	// When edit button is pressed
var editTask = function(){
	console.log('Edit task...');
		// if the class of parent is .editMode
			// Switch from .editMode
			// label text becomes the input's value
		// else
			// Switch to .editMode
			// Input value becomes label text

		// Toggle .editMode on the parent
};

// Delete an existing task
	// When delete button is pressed
var deleteTask = function(){
	console.log('Delete task...');
		// Remove parent list item from ul
};

// Mark a task as complete
	// When the checkbox is checked
var taskCompleted = function(){
	console.log('Task complete...');
		// Append the task list item to the #completed-tasks
};


// Mark a task as incomplete
	// When the checkbox is unchecked
var taskIncomplete = function(){
	console.log('Task incomplete...');
		// Append the task list item to the #incomplete-tasks
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log('bind list item events');

		var checkBox = taskListItem.querySelector("input[type=checkbox]");
		var editButton = taskListItem.querySelector("button.edit");
		var deleteButton =  taskListItem.querySelector("button.delete");
		// bind editTask to edit button
		editButton.onclick = editTask;
		// bind deleteTask to delete button
		deleteButton.onclick = deleteTask;
		// bind taskCompleted to checkbox
		checkBox.onchange = checkBoxEventHandler;
}


addButton.onclick = addTask;

for (i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (i = 0; i < completedTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

// cycle over incompleteTaskHolder ul list items
	// for each list item
		// bind events to list item's children (taskCompleted)

// cycle over completedTaskHolder ul list items
	// for each list item
		// bind events to list item's children (taskIncomplete)
