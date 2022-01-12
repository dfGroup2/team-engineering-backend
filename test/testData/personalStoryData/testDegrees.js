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

const testDegree2 = new Degree({
    university: "test university2",
    subject: "test subject2",
    level: "bachelors2",
    grade: "test grade2",
    date: {
        from: "2021-12-01T13:20:36.186Z",
        to: "2021-12-16T13:20:36.186Z"
    },
    weight: "test weight2",
    priority: 2,
    description: "enjoyed my time here2"
});

const testDegrees = [testDegree1, testDegree2];

module.exports = testDegrees;
