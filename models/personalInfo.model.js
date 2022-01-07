const mongoose = require('mongoose');

const { Schema } = mongoose;
const personalInfoSchema = new Schema({
    badges: { type: [String], default: ["defaultBadge"] },
    scores: { type: [String], default: ["defaultScore"] },
    videoLink: { type: String, default: "defaultVideoLink" }
});

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);
module.exports = { personalInfoSchema, PersonalInfo };