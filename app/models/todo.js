exports.definition = {

	config: {
		"columns": {
			"title":"text",
			"description":"text",
			"image":"text",
			"priority":"integer"
		},
		"adapter": {
			"type":"sql",
			"collection_name":"todo"
		}
	},

	extendModel: function(Model) {
		_.extend(Model.prototype, {

			// extended functions go here
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

		}); // end extend

		return Model;
	},

	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {

			// extended functions go here

		}); // end extend

		return Collection;
	}

};

