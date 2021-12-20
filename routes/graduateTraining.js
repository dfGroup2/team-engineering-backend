const { GraduateTraining } = require('../models/graduateTraining.model');

const graduateTrainingHandler = (req, res) => {
    console.log(req.params.id);
    GraduateTraining.findById(req.params.id, (err, graduateTraining) => {
        if (err) {
            return res.status(400).json({
                "message": "invalid id"
            })
        }
        return res.status(200).json(graduateTraining);
    })
}

module.exports = graduateTrainingHandler;