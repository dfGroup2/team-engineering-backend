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
    priority: "123456",
    description: "DummyDescription",
});

const testSchoolQualifications = [testSchoolQualifications1];

module.exports = testSchoolQualifications;