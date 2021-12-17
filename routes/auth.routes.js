const express = require('express');
const { signin, signup } = require('../controllers/auth.controller');
const router = express.Router();



router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.route(`/signup`)
    .post(signup);

router.route(`/signin`)
    .post(signin);

module.exports = router;