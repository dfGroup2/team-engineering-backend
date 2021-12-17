const express = require('express');

const { GraduateProfile } = require('../models/graduateProfile.model');
const router = express.Router();

//  /api/content/graduateProfile/:id
router.route(`/:id`)
	.get((req, res) => {
		// console.log(req);
		console.log(req.params.id);

		GraduateProfile.findById(req.params.id, (err, graduateProfile) => {
			if (err) {
				return res.status(400).json({
					"message": "invalid id"
				})
			}
			return res.status(200).json(graduateProfile);
		})

	})



module.exports = router;