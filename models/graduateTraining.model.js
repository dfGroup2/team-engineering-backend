const mongoose = require('mongoose');
const { isoDateRegex } = require('../js/regularExpressions');

const { Schema } = mongoose;
const graduateTrainingSchema = new Schema({
	learningPath: { type: String, required: true, default: "Software engineering" },
	cohort: { type: String, required: true, default: "mse-3" },
	trainer: { type: String, required: true, default: "Ed Wright" },
	finishedDate: { type: Date, required: true, match: [isoDateRegex, "invalid date"], default: "2021-12-01T13:20:36.186Z" },
	courseModules: {
		fundamentals: {
			"javascript programming": { type: String, required: true, default: "pass" }
		},
		"software design": {
			"bank challenge": { type: String, required: true, default: "pass" },
			"news summary challenge": { type: String, required: true, default: "pass" },
			"rock paper scissors challenge": { type: String, required: true, default: "pass" },
			"chitter challenge": { type: String, required: true, default: "pass" },
			"test-driven development": { type: String, required: true, default: "pass" },
		},
		"software development 1": {
			"3rd party integration": { type: String, required: true, default: "pass" },
		},
		"software development 2": {
			"business services": { type: String, required: true, default: "pass" },
			"full-stack application": { type: String, required: true, default: "pass" },
		},
		"team engineering": {
			"java challenge": { type: String, required: true, default: "pass" },
			"agile team collaboration": { type: String, required: true, default: "pass" }
		},
		"professional skills": {
			"interview challenges": { type: String, required: true, default: "pass" }
		}
	}
});

const GraduateTraining = mongoose.model('GraduateTraining', graduateTrainingSchema);

module.exports = { graduateTrainingSchema, GraduateTraining };