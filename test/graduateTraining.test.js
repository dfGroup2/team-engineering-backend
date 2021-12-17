const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const { expect } = require('chai');
const testGraduateTraining = require('./testData/testGraduateTraining.json');
const { GraduateTraining } = require('../models/graduateTraining.model.js');

chai.use(chaiHTTP);

const path = '/graduateTraining';

const id1 = "61bb122f2fc37a8c901f7d3c";
const id2 = "61bb122f2fc37a8c901f7d3d";
const id3 = "61bb122f2fc37a8c901f7d3e";

describe('test for graduate training route', () => {
    beforeEach(async () => {
        await GraduateTraining.deleteMany()
            .then(() => console.log('empty database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })

        await GraduateTraining.insertMany(testGraduateTraining)
            .then(() => console.log('entries added to database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })
    });

    xit('get request to /graduate training route should have status 200 and a graduate training object sent back', async () => {
        const response = await chai.request(server)
            .get(`${path}/${id1}`)
            .send();
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('Object');
        delete response.body.__v;
        expect(response.body).to.be.deep.equal(testGraduateTraining.find(graduate => graduate._id === id1));

    });

    xit(`get request to /graduateTraining/:id route with invalid id should have status 400 and an error object sent back`, async () => {
        const response = await chai.request(server)
            .get(`${path}/nonExistentId`)

        expect(response).to.have.status(400);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property("message", "invalid id");
    })
});