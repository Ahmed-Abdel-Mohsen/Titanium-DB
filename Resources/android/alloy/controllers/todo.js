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

	var __alloyId5 = {};var __alloyId8 = [];var __alloyId9 = { type: 'Ti.UI.View', childTemplates: function () {var __alloyId10 = [];var __alloyId11 = { type: 'Ti.UI.View', childTemplates: function () {var __alloyId12 = [];var __alloyId13 = { type: 'Ti.UI.Label', bindId: 'taskTitle', properties: { color: "#000", bindId: "taskTitle" } };__alloyId12.push(__alloyId13);var __alloyId14 = { type: 'Ti.UI.Label', bindId: 'taskDescription', properties: { color: "#000", bindId: "taskDescription" } };__alloyId12.push(__alloyId14);var __alloyId15 = { type: 'Ti.UI.Label', bindId: 'taskImage', properties: { color: "#000", bindId: "taskImage" } };__alloyId12.push(__alloyId15);var __alloyId16 = { type: 'Ti.UI.Label', bindId: 'taskPriority', properties: { color: "#000", bindId: "taskPriority" } };__alloyId12.push(__alloyId16);var __alloyId17 = { type: 'Ti.UI.View', properties: { width: Titanium.UI.FILL, height: "2dp", backgroundColor: "#d3d3d3", top: "6dp" } };__alloyId12.push(__alloyId17);return __alloyId12;}(), properties: { height: Titanium.UI.SIZE, layout: "vertical" } };__alloyId10.push(__alloyId11);var __alloyId18 = { type: 'Ti.UI.Button', properties: { title: "-", color: "#fff", backgroundColor: "#000", left: "50dp", width: "40dp", height: "20dp" } };__alloyId10.push(__alloyId18);return __alloyId10;}(), properties: { height: Titanium.UI.SIZE } };__alloyId8.push(__alloyId9);var __alloyId7 = { properties: { name: "elementTemplate" }, childTemplates: __alloyId8 };__alloyId5["elementTemplate"] = __alloyId7;$.__views.__alloyId19 = Ti.UI.createListSection(
	{ id: "__alloyId19" });

	var __alloyId21 = [];__alloyId21.push($.__views.__alloyId19);$.__views.listView = Ti.UI.createListView(
	{ sections: __alloyId21, templates: __alloyId5, id: "listView", defaultItemTemplate: "elementTemplate" });

	$.__views.todoWin.add($.__views.listView);
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

	Ti.App.addEventListener('app:init_list', function (_collection) {
		Ti.API.info("INIT LIST: " + JSON.stringify(_collection.todos));
		$.listView.sections[0].setItems(_collection.todos);
	});

	function destroy() {}
























	__defers['$.__views.addBtn!click!add'] && $.addListener($.__views.addBtn, 'click', add);



	_.extend($, exports);
}

module.exports = Controller;