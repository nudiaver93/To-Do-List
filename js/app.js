var taskInput = document.getElementById('new-task');
var addButton = document.getElementById('addbutton');
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

var createNewTaskElement = function(taskString){

	var listItem = document.createElement('li');
	 	//check box 
	var checkBox = document.createElement('input');
	 	//label 
	var label = document.createElement('label');
	 	//text input 
	var editInput = document.createElement('input');
	 	//edit button 
	var editButton = document.createElement('button');
	 	//delete button
	var deleteButton = document.createElement('button');
	 	//each element needs to be modified and appended
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
};

var addTask = function() {
	console.log('Add task...');

	var listItem = createNewTaskElement("Some task element");

	incompleteTasksHolder.appendChild(listItem);
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


var deleteTask = function(){
	console.log('Delete task...');
	
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	ul.removeChild(listItem);
};


var taskCompleted = function(){
	console.log('Task complete...');
	
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
};


var taskIncomplete = function(){
	console.log('Task incomplete...');

	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
};


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log('bind list item events');

		var checkBox = taskListItem.querySelector("input[type=checkbox]");
		var editButton = taskListItem.querySelector("button.edit");
		var deleteButton =  taskListItem.querySelector("button.delete");

		editButton.onclick = editTask;

		deleteButton.onclick = deleteTask;

		checkBox.onchange = checkBoxEventHandler;
}


addButton.onclick = addTask;

for (i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for (i = 0; i < completedTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}