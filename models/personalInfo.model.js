const mongoose = require('mongoose');


const { Schema } = mongoose;
const personalInfoSchema = new Schema({
    badges: { type: [String] },
    scores: { type: [String] },
    videoLink: { type: String }
});

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);
module.exports = { personalInfoSchema, PersonalInfo };