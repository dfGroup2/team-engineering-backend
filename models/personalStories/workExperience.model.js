const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions').default;

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
module.exports = { workExperienceSchema, WorkExperience };