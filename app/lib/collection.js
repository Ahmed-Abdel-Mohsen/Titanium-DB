var Alloy = require('alloy');
var todos = Alloy.createCollection('Todo');
todos.on("fetch", function() {
	var todorows = [],
	    i = 0,
	    len = todos.length,
	    model,
	    title;

	for (; i < len; i++) {
		model = todos.at(i).attributes;
		Ti.API.info("modelAttributes: " + JSON.stringify(model));
		todorows.push({
			taskTitle : {
				text : model['title']
			},
			taskDescription : {
				text : model['description']
			},
			taskImage : {
				text : model['image']
			},
			taskPriority : {
				text : model['priority']
			},
		});
	}
	Ti.App.fireEvent('app:init_list', {
		todos : todorows
	});
});

exports.fetch = function() {
	todos.fetch();
};

exports.add = function(task) {
	var todo = Alloy.createModel('Todo');
	todos.add(todo);
	todo.save({
		title : task.title,
		description : task.description,
		image : task.image,
		priority : task.priority
	}, {
		error : function(e) {
			Ti.API.info("Item Not Added: " + JSON.stringify(e));
		}
	});
};
