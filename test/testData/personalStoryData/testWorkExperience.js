const { WorkExperience } = require('../../../models/personalStories/workExperience.model');

const testWorkExperience1 = new WorkExperience({
    type: "test work type",
    employerOrOtherOrganization: "test employer",
    position: "test position",
    date: {
        from: "2021-12-01T13:20:36.186Z",
        to: "2021-12-16T13:20:36.186Z"
    },
    weight: "test weight",
    priority: 2,
    description: "test description"
});

const testWorkExperience2 = new WorkExperience({
    type: "test work type2",
    employerOrOtherOrganization: "test employer2",
    position: "test position2",
    date: {
        from: "2021-12-01T13:20:36.186Z",
        to: "2021-12-16T13:20:36.186Z"
    },
    weight: "test weight2",
    priority: 2,
    description: "test description2"
});

const testWorkExperience = [testWorkExperience1, testWorkExperience2];

module.exports = testWorkExperience;
