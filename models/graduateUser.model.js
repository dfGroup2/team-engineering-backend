const mongoose = require('mongoose');
const graduateProfileSchema = require('./graduateProfile.model');
const graduateTrainingSchema = require('./graduateTraining.model');
const personalInfoSchema = require('./personalInfo.model');
const personalStorySchema = require('./personalStory.model');

const { Schema } = mongoose;
// Change the key types from Schemas to ObjectId
const graduateUserSchema = new Schema({
    "graduateProfile": { type: graduateProfileSchema },
    "graduateTraining": { type: graduateTrainingSchema },
    "personalInfo": { type: personalInfoSchema },
    "personalStory": { type: personalStorySchema },
});

const GraduateUser = mongoose.model("graduateUser", graduateUserSchema);
module.exports = GraduateUser;