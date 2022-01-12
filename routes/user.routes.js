const express = require('express');

const authJWT = require('../middlewares/authJWT');
const graduateProfileHandler = require('./graduateProfile');
const personalStoryHandler = require('./personalStory');
const graduateTrainingHandler = require('./graduateTraining');

const graduateUserHandler = require('./graduateUser');
// authJWT = { verifyToken: function, isGraduateUser: function}

const router = express.Router();


router.use((req, res, next) => {
	res.header(
		"Access-Control-Allow-Headers",
		"x-access-token, Origin, Content-Type, Accept"
	);
	next();
});


// GET request to /api/content/graduateProfile
// that contains a JSON web token

router.get(`/graduateProfiles/:id`, [authJWT.verifyToken, authJWT.isGraduateUser], graduateProfileHandler);
router.get(`/personalStory/:id`, [authJWT.verifyToken, authJWT.isGraduateUser], personalStoryHandler);
router.get(`/graduateTraining/:id`, [authJWT.verifyToken, authJWT.isGraduateUser], graduateTrainingHandler)

// add a router for requests to GraduateUser route
// id is the id of the logged in user
router.get(`/graduateUsers/:id`, [authJWT.verifyToken, authJWT.isGraduateUser], graduateUserHandler);

const { GraduateUser } = require('../models/graduateUser.model');
router.route('/graduateUsers/:id')
	.put((req, res) => {
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
	});

module.exports = router;