const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const { expect } = require('chai');
const testGraduateProfile = require('./testData/testGraduateProfile.json');
const { GraduateProfile } = require('../models/graduateProfile.model.js');
const User = require('../models/authentication/user.model')
const testUserSignup = require('./testData/authenticationData/testUserSignup.json');


chai.use(chaiHTTP);

const path = '/api/content/graduateProfiles';

const id1 = "61bb122f2fc37a8c901f7d3c";
const id2 = "61bb122f2fc37a8c901f7d3d";
const id3 = "61bb122f2fc37a8c901f7d3e";

describe('test for graduate profile route', () => {
    let token;
    let id;
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
        const user = new User(testUserSignup[0]);
        await user.save(error => {
            if (error) {
                console.log(error);
            }
        });
        // await User.insertOne(testUserSignup[0])
        //     .then(() => console.log('userRegistered'))
        //     .catch(error => {
        //         console.log(error)
        //         throw new Error();
        //     })
        const { username, password } = testUserSignup[0]
        const response = await chai.request(server)
            .post(`/api/auth/signin`)
            .send({ username, password });
        id = response.id;
        token = response.accessToken;
        console.log(id);
        console.log(token);

    });

    afterEach(() => {
        id = null;
        token = null;
    });

    it('get request to /graduate profile route should have status 200 and a graduate profile object sent back', async () => {
        const response = await chai.request(server)
            .get(`${path}/${id}`)
            .send({ headers: { 'x-access-token': token } });
        console.log(id);
        console.log(token);
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('Object');
        delete response.body.__v;
        expect(response.body).to.be.deep.equal(testGraduateProfile.find(graduate => graduate._id === id1));

    });

    xit(`get request to /graduateProfile/:id route with invalid id should have status 400 and an error object sent back`, async () => {
        const response = await chai.request(server)
            .get(`${path}/nonExistentId`)

        expect(response).to.have.status(400);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property("message", "invalid id");
    })
});
