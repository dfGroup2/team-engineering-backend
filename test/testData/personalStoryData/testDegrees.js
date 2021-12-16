const { Degree } = require('../../../models/personalStories/degree.model');

const testDegree1 = new Degree({
    university: "test university",
    subject: "test subject",
    level: "bachelors",
    grade: "test grade",
    date: {
        from: "2021-12-01T13:20:36.186Z",
        to: "2021-12-16T13:20:36.186Z"
    },
    weight: "test weight",
    priority: 2,
    description: "enjoyed my time here"
});

const testDegrees = [testDegree1];

module.exports = testDegrees;
