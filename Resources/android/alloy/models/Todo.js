var Alloy = require('/alloy'),
    _ = require("/alloy/underscore")._,
    model,
    collection;

exports.definition = {

	config: {
		"columns": {
			"title": "text",
			"description": "text",
			"image": "text",
			"priority": "integer"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "todo"
		}
	},

	extendModel: function (Model) {
		_.extend(Model.prototype, {
			validate: function (attrs) {
				for (var key in attrs) {
					var value = attrs[key];
					if (key === "item") {
						if (value.length <= 0) {
							return 'Error: No item!';
						}
					}
					if (key === "done") {
						if (value.length <= 0) {
							return 'Error: No completed flag!';
						}
					}
				}
			}

		});

		return Model;
	},

	extendCollection: function (Collection) {
		_.extend(Collection.prototype, {});

		return Collection;
	}

};

model = Alloy.M('todo', exports.definition, []);

collection = Alloy.C('todo', exports.definition, model);

exports.Model = model;
exports.Collection = collection;