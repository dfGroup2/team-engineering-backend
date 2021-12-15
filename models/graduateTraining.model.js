const mongoose = require('mongoose');
import { isoDateRegex } from '../js/regularExpressions';

const { Schema } = mongoose;
const graduateTrainingSchema = new Schema({
	learningPath = { type: String, required: true },
	cohort = { type: String, required: true },
	trainer = { type: String, required: true },
	finishedDate = { type: Date, required: true, match: [isoDateRegex, "invalid date"] },
	courseModules = {
		// Might have to change these later
		fundamentals = {
			"javascript programming": { type: String, required: true }
		},
		"software design": {
			"bank challenge": { type: String, required: true },
			"news summary challenge": { type: String, required: true },
			"rock paper scissors challenge": { type: String, required: true },
			"chitter challenge": { type: String, required: true },
			"test-driven development": { type: String, required: true },
		},
		"software development 1": {
			"3rd party integration": { type: String, required: true },
		},
		"software development 2": {
			"business services": { type: String, required: true },
			"full-stack application": { type: String, required: true },
		},
		"team engineering": {
			"java challenge": { type: String, required: true },
			"agile team collaboration": { type: String, required: true }
		},
		"professional skills": {
			"interview challenges": { type: String, required: true }
		}
	}
});

const GraduateTraining = mongoose.model('GraduateTraining', graduateTrainingSchema);
module.exports = GraduateTraining;