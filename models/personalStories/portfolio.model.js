const mongoose = require('mongoose');
import { isoDateRegex } from '../../js/regularExpressions';

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
export { portfolioSchema, Portfolio };