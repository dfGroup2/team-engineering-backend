import express from 'express';

const authJWT = require('../middlewares/authJWT');

// authJWT = { verifyToken: function, isGraduateUser: function}

const router = express.Router();


router.use((req, res, next) => {
	res.header(
		"Access-Control-Allow-Headers",
		"x-access-token, Origin, Content-Type, Accept"
	);
	next();
});


// /api/content/graduateProfile
router.get(`/graduateProfile`, [authJWT.verifyToken],);





export default userRouter;