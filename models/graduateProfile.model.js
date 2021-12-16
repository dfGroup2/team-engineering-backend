const mongoose = require('mongoose');
const { emailRegex } = require('../js/regularExpressions');

const { Schema } = mongoose;
const graduateProfileSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    personalEmail: { type: String, required: true, match: [emailRegex, 'Invalid email'] },
    DFEmail: { type: String, required: true, match: [emailRegex, 'Invalid email'] },
    github: { type: String },
    linkedIn: { type: String },
    phoneNumber: { type: Number },
    profilePicture: { type: String },
    personalStory: { type: [String] },
    gender: { type: String, required: true },
    nationality: { type: String, required: true },
    personality: { type: String, required: true },
});

const GraduateProfile = mongoose.model('GraduateProfile', graduateProfileSchema);

module.exports = { GraduateProfile, graduateProfileSchema };