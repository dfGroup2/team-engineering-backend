const mongoose = require('mongoose');

const { Schema } = mongoose;
const personalInfoSchema = new Schema({
    badges: { type: [String], default: ["defaultBadge", "defaultBadge2", "defaultBadge3"] },
    scores: { type: [String], default: ["defaultScore", "DefaultScore2", "defaultScore3"] },
    videoLink: { type: String, default: "defaultVideoLink" }
});

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);
module.exports = { personalInfoSchema, PersonalInfo };