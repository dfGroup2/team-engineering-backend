const { GraduateProfile } = require('../models/graduateProfile.model');

const graduateProfileHandler = (req, res) => {
	GraduateProfile.findById(req.params.id, (err, graduateProfile) => {
		if (err) {
			return res.status(400).json({
				"message": "invalid id"
			})
		}
		return res.status(200).json(graduateProfile);
	})

}

module.exports = graduateProfileHandler;