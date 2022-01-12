const { SchoolQualifications } = require('../../../models/personalStories/schoolQualifications.model');

const testSchoolQualifications1 = new SchoolQualifications({
    school: "DummySchool",
    examType: "DummyExamType",
    subject: "DummySubject",
    grade: "DummyGrade",
    year: {
        from: "2021-12-16T13:20:36.186Z",
        to: "2021-12-16T13:20:36.186Z"
    },
    weight: "DummyWeight",
    priority: 1,
    description: "DummyDescription",
});

const testSchoolQualifications2 = new SchoolQualifications({
    school: "DummySchool2",
    examType: "DummyExamType2",
    subject: "DummySubject2",
    grade: "DummyGrade2",
    year: {
        from: "2021-12-16T13:20:36.186Z",
        to: "2021-12-16T13:20:36.186Z"
    },
    weight: "DummyWeight2",
    priority: 123456,
    description: "DummyDescription2",
});

const testSchoolQualifications = [testSchoolQualifications1, testSchoolQualifications2];

module.exports = testSchoolQualifications;