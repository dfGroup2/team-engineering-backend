const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions');

const { Schema } = mongoose;
const portfolioSchema = new Schema({
    title: { type: String, default: "defaultTitle" },
    url: { type: String, default: "defaultUrl" },
    year: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"], default: "2021-12-01T13:20:36.186Z" },
    weight: { type: String, default: "defaultWeight" },
    priority: { type: Number, default: 0 },
    description: { type: String, default: "defaultDescription" },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = { portfolioSchema, Portfolio };