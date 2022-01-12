const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions');

const { Schema } = mongoose;
const degreeSchema = new Schema({
    university: { type: String, default: "defaultUni" },
    subject: { type: String, default: "defaultSubject" },
    level: { type: String, default: "defaultLevel" },
    grade: { type: String, default: "defaultGrade" },
    date: {
        from: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-01T13:20:36.186Z" },
        to: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-02T13:20:36.186Z" }
    },
    weight: { type: String, default: "defaultWeight" },
    priority: { type: Number, default: 0 },
    description: { type: String, default: "defaultDescription" },
});

const Degree = mongoose.model("Degree", degreeSchema);
module.exports = { degreeSchema, Degree };