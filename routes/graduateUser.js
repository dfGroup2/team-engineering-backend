const { GraduateUser } = require('../models/graduateUser.model');

const graduateUserHandler = (req, res) => {
	console.log(req.params.id);
	GraduateUser.findById(req.params.id, (err, graduateUser) => {
		if (err) {
			return res.status(400).json({
				"message": "invalid id"
			})
		}
		return res.status(200).json(graduateUser);
	})

};



module.exports = graduateUserHandler;