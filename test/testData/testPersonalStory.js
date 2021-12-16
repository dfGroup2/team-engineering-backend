const testDegrees = require('./personalStoryData/testDegrees');
const testCertificatesAwards = require('./personalStoryData/testCertificatesAwards');
const testPortfolios = require('./personalStoryData/testPortfolios');
const testSchoolQualifications = require('./personalStoryData/testSchoolQualifications');
const testWorkExperience = require('./personalStoryData/testWorkExperience');



const personalStories = [
    {
        "_id": "61bb122f2fc37a8c901f7d3c",
        "degree": testDegrees[0],
        "schoolQualifications": testSchoolQualifications[0],
        "certificatesAndAwards": testCertificatesAwards[0],
        "portfolio": testPortfolios[0],
        "workExperience": testWorkExperience[0]
    }
];

const personalStoriesJSON = JSON.stringify(personalStories);

module.exports = personalStoriesJSON;

