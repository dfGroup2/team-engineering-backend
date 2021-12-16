const CertificatesAndAwards = require('../../../models/personalStories/certificatesAndAwards.model');

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

const testCertificatesAndAwards = [testCertificate1];

module.exports = testCertificatesAndAwards;
