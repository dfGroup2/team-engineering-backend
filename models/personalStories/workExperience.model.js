const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions');

const { Schema } = mongoose;
const workExperienceSchema = new Schema({
    type: { type: String, default: "defaultType" },
    employerOrOtherOrganization: { type: String, default: "defaultEmployer" },
    position: { type: String, default: "defaultPosition" },
    date: {
        from: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-01T13:20:36.186Z" },
        to: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-02T13:20:36.186Z" }
    },
    weight: { type: String, default: "defaultWeight" },
    priority: { type: Number, default: 0 },
    description: { type: String, default: "defaultDescription" },
});

const WorkExperience = mongoose.model("WorkExperience", workExperienceSchema);
module.exports = { workExperienceSchema, WorkExperience };