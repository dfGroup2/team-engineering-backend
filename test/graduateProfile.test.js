const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const { expect } = require('chai');
const testGraduateProfile = require('./testData/testGraduateProfile.json');
const { GraduateProfile } = require('../models/graduateProfile.model.js');

chai.use(chaiHTTP);

const path = '/graduateProfiles';
const id1 = '61bb122f2fc37a8c901f7d3c';
const id2 = "61bb122f2fc37a8c901f7d3d";
const id3 = "61bb122f2fc37a8c901f7d3e";

describe('test for graduate profile route', () => {
    beforeEach(async () => {
        await GraduateProfile.deleteMany()
            .then(() => console.log('empty database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })

        await GraduateProfile.insertMany(testGraduateProfile)
            .then(() => console.log('entries added to database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })
    });

    it('get request to /graduate profile route should have status 200 and a graduate profile object sent back', async () => {
        const response = await chai.request(server)
            .get(`${path}/${id1}`)
        expect(response).to.have.status(200);
        expect(response.body).to.be.an.equal('Object');
        expect(response.body).to.be.an.instanceOf(GraduateProfile);
    });
});
