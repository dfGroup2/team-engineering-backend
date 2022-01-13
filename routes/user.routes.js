const express = require('express');

const authJWT = require('../middlewares/authJWT');

const graduateUserHandler = require('./graduateUser');
const editGraduateUserHandler = require('./editGraduateUser');

const router = express.Router();

router.use((req, res, next) => {
	res.header(
		"Access-Control-Allow-Headers",
		"x-access-token, Origin, Content-Type, Accept"
	);
	next();
});

router.get(`/graduateUsers/:id`, [authJWT.verifyToken, authJWT.isGraduateUser], graduateUserHandler);
router.put('/graduateUsers/:id', [authJWT.verifyToken, authJWT.isGraduateUser], editGraduateUserHandler);

module.exports = router;