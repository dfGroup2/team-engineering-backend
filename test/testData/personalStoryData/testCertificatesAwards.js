const { CertificatesAndAwards } = require('../../../models/personalStories/certificatesAndAwards.model');

const testCertificate1 = new CertificatesAndAwards({
    type: "test award type",
    issuer: "test organisation",
    award: "test award",
    grade: "test grade",
    year: "2021-12-01T13:20:36.186Z",
    weight: "test weight",
    priority: 2,
    description: "test description"
});

const testCertificate2 = new CertificatesAndAwards({
    type: "test award type2",
    issuer: "test organisation2",
    award: "test award2",
    grade: "test grade2",
    year: "2021-12-01T13:20:36.186Z",
    weight: "test weight2",
    priority: 2,
    description: "test description2"
});

const testCertificatesAndAwards = [testCertificate1, testCertificate2];

module.exports = testCertificatesAndAwards;
