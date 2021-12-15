const mongoose = require('mongoose');
import { emailRegex, isoDateRegex } from '../js/regularExpressions';

const { Schema } = mongoose;
const graduateTrainingSchema = new Schema({
	learningPath = { type: String, required: true },
	cohort = { type: String, required: true },
	trainer = { type: String, required: true },
	finishedDate = { type: Date, required: true, match: [isoDateRegex, "invalid date"] },
	courseModules = {
		fundamentals = { type: String, }
	}

});

const GraduateProfile = mongoose.model('GraduateProfile', graduateProfileSchema);
module.exports = graduateProfileSchema;