import express from 'express';

const router = express.Router();

import User from '../models/userSchema.js';

router.route(`/`)
    .post((req, res) => {
        const { email, password } = req.body;

        User.findOne({ email }, (err, user) => {
            if (user && password === user.password) {
                res.send({ message: `Login success`, user });
            }
            else {
                res.send({ message: `Details not found` });
            }
        });
    });

export { router as login };