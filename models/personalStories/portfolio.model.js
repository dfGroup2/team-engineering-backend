const mongoose = require('mongoose');
const { isoDateRegex } = require('../../js/regularExpressions').default;

const { Schema } = mongoose;
const portfolioSchema = new Schema({
    title: { type: String },
    url: { type: String },
    year: { type: Date, required: true, match: [isoDateRegex, "Date is invalid"] },
    weight: { type: String },
    priority: { type: Number },
    description: { type: String },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.export = { portfolioSchema, Portfolio };