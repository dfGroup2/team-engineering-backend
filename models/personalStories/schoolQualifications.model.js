const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions');

const { Schema } = mongoose;
const schoolQualificationsSchema = new Schema({
    school: { type: String, default: "defaultSchool" },
    examType: { type: String, default: "defaultExamType" },
    subject: { type: String, default: "defaultSubject" },
    grade: { type: String, default: "defaultGrade" },
    year: {
        from: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-01T13:20:36.186Z" },
        to: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-02T13:20:36.186Z" }
    },
    weight: { type: String, default: "defaultWeight" },
    priority: { type: Number, default: 0 },
    description: { type: String, default: "defaultDescription" },
});

const SchoolQualifications = mongoose.model("SchoolQualifications", schoolQualificationsSchema);
module.exports = { schoolQualificationsSchema, SchoolQualifications };