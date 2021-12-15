const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const { expect } = require('chai');
const testGraduateProfile = require('./testData/testGraduateProfile.json');
const { GraduateProfile } = require('../models/graduateProfile.model.js');

chai.use(chaiHTTP);

const path = '/graduateProfile';
const id = '';

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

    it('get request to /graduate profile rote', () => {
        const response = await chai.request(server)
            .get(`${path}/${id}`)
        expect(response).to.have.status(200);
        expect(response.body).to.be.an.equal('Object');
        expect(response.body).to.be.an.instanceOf(GraduateProfile);
    });


});
