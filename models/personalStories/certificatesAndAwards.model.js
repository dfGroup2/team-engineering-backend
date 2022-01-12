const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions');

const { Schema } = mongoose;
const certificatesAndAwardsSchema = new Schema({
    type: { type: String },
    issuer: { type: String },
    award: { type: String },
    grade: { type: String },
    year: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-01T13:20:36.186Z" },
    weight: { type: String },
    priority: { type: Number },
    description: { type: String },
});

const CertificatesAndAwards = mongoose.model("CertificatesAndAwards", certificatesAndAwardsSchema);
module.exports = { certificatesAndAwardsSchema, CertificatesAndAwards };