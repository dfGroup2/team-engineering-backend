// const express = require('express');
// const { GraduateProfile } = require('../models/graduateProfile.model');

// const { GraduateUser } = require('../models/graduateUser.model');

// const router = express.Router();

// router.route(`/:id`)
//     .get((req, res) => {
//         console.log(req.params.id);
//         GraduateUser.findById(req.params.id, (err, graduateUser) => {
//             if (err) {
//                 return res.status(400).json({
//                     "message": "invalid id"
//                 })
//             }
//             return res.status(200).json(graduateUser);
//         })

//     });



// module.exports = router;