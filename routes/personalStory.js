const express = require('express');

const { PersonalStory } = require('../models/personalStory.model');
const router = express.Router();

router.route(`/:id`)
    .get((req, res) => {
        PersonalStory.findById(req.params.id, (err, personalStory) => {
            if (err) {
                return res.status(400).json({
                    "message": "invalid id"
                })
            }
            return res.status(200).json(personalStory);
        })

    })



module.exports = router;