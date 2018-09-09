var todos = require('collection');

function add() {
	var controller = Alloy.createController("add");
	controller.addWin.open();
}

$.todoWin.addEventListener('focus', function() {
	todos.fetch();
});

$.todoTable.updateContent = function(_rows) {
	var rows = [],
	    i = 0,
	    len = _rows.length;
	for (; i < len; i++) {
		rows.push(Ti.UI.createTableViewRow(_rows[i]));
	}
	this.setData(rows);
};

$.todoTable.addEventListener('click', function(e) {
	Ti.API.info('Title: ' + e.rowData.title);
});

Ti.App.addEventListener('app:update_list', function(_collection) {
	Ti.API.info("UPDATE LIST: " + JSON.stringify(_collection.todos));
	_collection.todos.forEach(function(row) {
		row.color = "#000";
	});
	$.todoTable.updateContent(_collection.todos);
});
