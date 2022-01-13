const { GraduateUser } = require('../models/graduateUser.model');

const editGraduateUserHandler = (req, res) => {
	const id = req.params.id;
	GraduateUser.findById(id, (error, graduateUser) => {
		if (!graduateUser) {
			res.status(404).send('That user data cannot be found');
		}
		else {
			graduateUser.graduateProfile = req.body.graduateProfile;
			graduateUser.graduateTraining = req.body.graduateTraining;
			graduateUser.personalInfo = req.body.personalInfo;
			graduateUser.personalStory = req.body.personalStory;

			graduateUser.save()
				.then(graduateUser => {
					res.status(201).json({ 'graduateUser': `${graduateUser} data added successfully` });
				})
				.catch(err => res.status(400).send({ 'error': `Adding to data failed: ${err}` }));
		}
	});
}

module.exports = editGraduateUserHandler;