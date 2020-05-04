var db = require('../db');

module.exports = {
	getRole: function(req, res){
		db.Role.findAll({ attributes: ["id", ["name", "value"]] }).then((data) => res.json(data));
	},
	getById: function(req, res){
		db.Role.findByPk(req.params.roleId).then(data => res.json(data));
	},
	deleteRole: function(req, res){
		db.Role.findByPk(req.params.roleId)
			.then((role) => 
				role.destroy())
			.then(() => 
				res.json({}));
	},
	addRole: function(req, res){
		db.Role.create(req.body).then((obj) => 
				res.json({ id: obj.id }));
	},
	updateRole: function(req, res){
		const data = req.body;

		db.Role.findByPk(req.params.roleId)
			.then((role) => 
				role.update(data))
			.then(() => 
				res.json({}));
	},
};