const mongoose = require('mongoose');
const { graduateProfileSchema } = require('./graduateProfile.model');
const { graduateTrainingSchema } = require('./graduateTraining.model');
const { personalInfoSchema } = require('./personalInfo.model');
const { personalStorySchema } = require('./personalStory.model');

const { Schema } = mongoose;

const graduateUserSchema = new Schema({
    "graduateProfile": { type: graduateProfileSchema, default: () => ({}) },
    "graduateTraining": { type: graduateTrainingSchema, default: () => ({}) },
    "personalInfo": { type: personalInfoSchema, default: () => ({}) },
    "personalStory": { type: personalStorySchema, default: () => ({}) },
});

const GraduateUser = mongoose.model("graduateUser", graduateUserSchema);
module.exports = { GraduateUser };