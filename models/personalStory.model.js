const mongoose = require('mongoose');


const { Schema } = mongoose;
const personalStorySchema = new Schema({
    degree: { type: degreeSchema },
    schoolQualifications: { type: schoolQualificationsSchema },
    certificatesAndAwards: { type: certificatesAndAwardsSchema },
    portfolio: { type: portfolioSchema },
    workExperience: { type: workExperienceSchema }
});

const PersonalStory = mongoose.model("PersonalStory", personalStorySchema);
export { personalStorySchema, PersonalStory };