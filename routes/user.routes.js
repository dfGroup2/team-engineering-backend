import express from 'express';

const authJWT = require('../middlewares/authJWT');
const graduateProfileRouter = require('./graduateProfile');
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

router.get(`/graduateProfile`, [authJWT.verifyToken, authJWT.isGraduateUser], graduateProfileRouter);





export default userRouter;