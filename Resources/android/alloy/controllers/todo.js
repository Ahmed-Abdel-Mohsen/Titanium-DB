var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'todo';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.todoWin = Ti.UI.createWindow(
	{ backgroundColor: "white", id: "todoWin", title: "Todo" });

	$.__views.todoTable = Ti.UI.createTableView(
	{ id: "todoTable" });

	$.__views.todoWin.add($.__views.todoTable);
	$.__views.addBtn = Ti.UI.createButton(
	{ title: "+", onClick: "add", right: "16dp", bottom: "16dp", borderRadius: "120dp", width: "48dp", height: "48dp", backgroundColor: "Black", id: "addBtn" });

	$.__views.todoWin.add($.__views.addBtn);
	add ? $.addListener($.__views.addBtn, 'click', add) : __defers['$.__views.addBtn!click!add'] = true;$.__views.todo = Ti.UI.createTab(
	{ window: $.__views.todoWin, title: "Todo", id: "todo" });

	$.__views.todo && $.addTopLevelView($.__views.todo);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var todos = require('collection');

	function add() {
		var controller = Alloy.createController("add");
		controller.addWin.open();
	}

	$.todoWin.addEventListener('focus', function () {
		todos.fetch();
	});

	$.todoTable.updateContent = function (_rows) {
		var rows = [],
		i = 0,
		len = _rows.length;

		for (; i < len; i++) {
			rows.push(Ti.UI.createTableViewRow(_rows[i]));






		}
		this.setData(rows);
	};

	$.todoTable.addEventListener('click', function (e) {
		Ti.API.info('Title: ' + e.rowData.title);
	});

	Ti.App.addEventListener('app:update_list', function (_collection) {
		Ti.API.info("UPDATE LIST: " + JSON.stringify(_collection.todos));
		_collection.todos.forEach(function (row) {
			row.color = "#000";
		});
		$.todoTable.updateContent(_collection.todos);
	});





	__defers['$.__views.addBtn!click!add'] && $.addListener($.__views.addBtn, 'click', add);



	_.extend($, exports);
}

module.exports = Controller;