var todos = require('collection');

$.addBtn.addEventListener('click', function() {
	// add todo item
	var task = {
		title: $.titleField.value,
		description: $.descriptionField.value,
		image: $.imageField.value,
		priority: $.priorityField.value
	};
	todos.add(task);

	$.addWin.close();
});

$.cancelBtn.addEventListener('click', function() {
	$.addWin.close();
});
