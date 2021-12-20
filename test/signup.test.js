const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const { expect } = require('chai');
const testUsers = require('./testData/authenticationData/testUserSignup.json');


chai.use(chaiHTTP);

const path = '/api/auth/signup';

const id1 = "61bb122f2fc37a8c901f7d3c";
const id2 = "61bb122f2fc37a8c901f7d3d";
const id3 = "61bb122f2fc37a8c901f7d3e";

describe('test for Signup route', () => {


    it('post request to /api/auth/signup story route should have status 200 and a success message sent back', async () => {
        const response = await chai.request(server)
            .post(`${path}`)
            .send(testUsers[0]);
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('Object');

        expect(response.body).to.have.property('message', 'User was registered successfully!');
    });

    xit(`post request to  /api/auth/signup story route should have status `, async () => {
        const response = await chai.request(server)
            .post(`${path}`)
            .send(testUsers[1]);
        // to be done
    })
});