const mongoose = require('mongoose');
const { degreeSchema } = require('./personalStories/degree.model');
const { schoolQualificationsSchema } = require('./personalStories/schoolQualifications.model');
const { certificatesAndAwardsSchema } = require('./personalStories/certificatesAndAwards.model');
const { portfolioSchema } = require('./personalStories/portfolio.model');
const { workExperienceSchema } = require('./personalStories/workExperience.model');

const { Schema } = mongoose;
const personalStorySchema = new Schema({
    degree: { type: [degreeSchema], default: () => ([{}]) },
    schoolQualifications: { type: [schoolQualificationsSchema], default: () => ([{}]) },
    certificatesAndAwards: { type: [certificatesAndAwardsSchema], default: () => ([{}]) },
    portfolio: { type: [portfolioSchema], default: () => ([{}]) },
    workExperience: { type: [workExperienceSchema], default: () => ([{}]) }
});

const PersonalStory = mongoose.model("PersonalStory", personalStorySchema);
module.exports = { personalStorySchema, PersonalStory };