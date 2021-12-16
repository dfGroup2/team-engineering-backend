const express = require('express');
const mongoose = require('mongoose');
const GraduateProfile = require('../models/graduateProfile.model');
const router = express.Router();

router.route(`/:id`)
	.get((req, res) => {
		// console.log(req);
		console.log(req.params.id);

		GraduateProfile.findById(req.params.id, (err, graduateProfile) => {
			console.log(graduateProfile);
			return res.status(200).json(graduateProfile);
		})

	})



module.exports = router;