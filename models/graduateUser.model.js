const mongoose = require('mongoose');
import graduateProfileSchema from './graduateProfile.model';
import graduateTrainingSchema from './graduateTraining.model';

const { Schema } = mongoose;
const graduateUserSchema = new Schema({
    "graduateProfile": { type: graduateProfileSchema },
    "graduateTraining": { type: graduateTrainingSchema },
    "personalInfo": { type: personalInfoSchema },
    "personalStory": { type: personalStorySchema },
    "news": { type: newsSchema },
});

const GraduateUser = mongoose.model("graduateUser", graduateUserSchema);
export default GraduateUser;