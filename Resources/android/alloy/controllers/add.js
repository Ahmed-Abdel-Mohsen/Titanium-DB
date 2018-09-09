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
	this.__controllerPath = 'add';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.addWin = Ti.UI.createWindow(
	{ backgroundColor: "white", layout: "vertical", id: "addWin", title: "Add Item", modal: true });

	$.__views.addWin && $.addTopLevelView($.__views.addWin);
	$.__views.titleField = Ti.UI.createTextField(
	{ id: "titleField", hintText: "Title", hintTextColor: "#d3d3d3", color: "#000" });

	$.__views.addWin.add($.__views.titleField);
	$.__views.descriptionField = Ti.UI.createTextField(
	{ id: "descriptionField", hintText: "Description", hintTextColor: "#d3d3d3", color: "#000" });

	$.__views.addWin.add($.__views.descriptionField);
	$.__views.imageField = Ti.UI.createTextField(
	{ id: "imageField", hintText: "Image path", hintTextColor: "#d3d3d3", color: "#000" });

	$.__views.addWin.add($.__views.imageField);
	$.__views.priorityField = Ti.UI.createTextField(
	{ id: "priorityField", hintText: "Priority", hintTextColor: "#d3d3d3", color: "#000" });

	$.__views.addWin.add($.__views.priorityField);
	$.__views.addBtn = Ti.UI.createButton(
	{ width: "50%", top: 20, title: 'Add Item', id: "addBtn" });

	$.__views.addWin.add($.__views.addBtn);
	$.__views.cancelBtn = Ti.UI.createButton(
	{ width: "50%", top: 20, title: 'Cancel', id: "cancelBtn" });

	$.__views.addWin.add($.__views.cancelBtn);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var todos = require('collection');

	$.addBtn.addEventListener('click', function () {

		var task = {
			title: $.titleField.value,
			description: $.descriptionField.value,
			image: $.imageField.value,
			priority: $.priorityField.value };

		todos.add(task);

		$.addWin.close();
	});

	$.cancelBtn.addEventListener('click', function () {
		$.addWin.close();
	});









	_.extend($, exports);
}

module.exports = Controller;