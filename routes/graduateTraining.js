const express = require('express');

const { GraduateTraining } = require('../models/graduateTraining.model');
const router = express.Router();

router.route(`/:id`)
    .get((req, res) => {
        console.log(req.params.id);
        GraduateTraining.findById(req.params.id, (err, graduateTraining) => {
            if (err) {
                return res.status(400).json({
                    "message": "invalid id"
                })
            }
            return res.status(200).json(graduateTraining);
        })

    })



module.exports = router;