const express = require('express');

const authJWT = require('../middlewares/authJWT');
const graduateProfileHandler = require('./graduateProfile');
const personalStoryHandler = require('./personalStory');
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





module.exports = router;