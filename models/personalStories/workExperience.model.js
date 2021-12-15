const mongoose = require('mongoose');
import { isoDateRegex } from '../../js/regularExpressions';

const { Schema } = mongoose;
const workExperienceSchema = new Schema({
    type: { type: String },
    employerOrOtherOrganization: { type: String },
    position: { type: String },
    date: {
        from: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"] },
        to: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"] }
    },
    weight: { type: String },
    priority: { type: String },
    description: { type: String },
});

const WorkExperience = mongoose.model("WorkExperience", workExperienceSchema);
export { workExperienceSchema, WorkExperience };