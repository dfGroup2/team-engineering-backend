const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions').default;

const { Schema } = mongoose;
const degreeSchema = new Schema({
    university: { type: String },
    subject: { type: String },
    level: { type: String },
    grade: { type: String },
    date: {
        from: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"] },
        to: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"] }
    },
    weight: { type: String },
    priority: { type: Number },
    description: { type: String },
});

const Degree = mongoose.model("Degree", degreeSchema);
module.export = { degreeSchema, Degree };