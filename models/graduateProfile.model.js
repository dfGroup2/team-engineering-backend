const mongoose = require('mongoose');
const { emailRegex } = require('../js/regularExpressions');

const { Schema } = mongoose;
const graduateProfileSchema = new Schema({
    firstName: { type: String, required: true, default: "defaultFirstName" },
    lastName: { type: String, required: true, default: "defaultLastName" },
    personalEmail: { type: String, required: true, match: [emailRegex, 'Invalid email'], default: "test@email.com" },
    DFEmail: { type: String, required: true, match: [emailRegex, 'Invalid email'], default: "test@email.com" },
    github: { type: String },
    linkedIn: { type: String },
    phoneNumber: { type: Number },
    profilePicture: { type: String },
    gender: { type: String, required: true, default: "defaultGender" },
    nationality: { type: String, required: true, default: "defaultNationality" },
    personality: { type: String, required: true, default: "defaultPersonality" },
});

const GraduateProfile = mongoose.model('GraduateProfile', graduateProfileSchema);

module.exports = { GraduateProfile, graduateProfileSchema };