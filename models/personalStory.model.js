const mongoose = require('mongoose');
const { degreeSchema } = require('./personalStories/degree.model');
const { schoolQualificationsSchema } = require('./personalStories/schoolQualifications.model');
const { certificatesAndAwardsSchema } = require('./personalStories/certificatesAndAwards.model');
const { portfolioSchema } = require('./personalStories/portfolio.model');
const { workExperienceSchema } = require('./personalStories/workExperience.model');

const { Schema } = mongoose;
const personalStorySchema = new Schema({
    degree: { type: degreeSchema },
    schoolQualifications: { type: schoolQualificationsSchema },
    certificatesAndAwards: { type: certificatesAndAwardsSchema },
    portfolio: { type: portfolioSchema },
    workExperience: { type: workExperienceSchema }
});

const PersonalStory = mongoose.model("PersonalStory", personalStorySchema);
module.exports = { personalStorySchema, PersonalStory };