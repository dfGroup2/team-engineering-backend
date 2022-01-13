const chai = require('chai');
const chaiHTTP = require('chai-http');
const bcrypt = require('bcryptjs');
const server = require('../server');
const { expect } = require('chai');
const testGraduateTraining = require('./testData/testGraduateTraining.json');
const { GraduateTraining } = require('../models/graduateTraining.model.js');

const User = require('../models/authentication/user.model');
const Role = require('../models/authentication/role.model');
const testUserSignup = require('./testData/authenticationData/testUserSignup.json');
const testRoles = require('./testData/authenticationData/testRoles.json');

chai.use(chaiHTTP);

const path = '/api/content/graduateTraining';

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

        await Role.deleteMany()
            .then(() => console.log('emptied roles collection'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })

        await Role.insertMany(testRoles)
            .then(() => console.log('added roles to database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })

        await User.deleteMany()
            .then(() => console.log('emptied User collection'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })


        const passwordHash = bcrypt.hashSync(testUserSignup[0].password, 8);
        const { username, password, email } = testUserSignup[0];
        const user = new User({ username, email, password: passwordHash, roles: [testRoles[0]._id] });
        await user.save(error => {
            if (error) {
                console.log(error);
            }
        });

        const response = await chai.request(server)
            .post(`/api/auth/signin`)
            .send({ username, password });

        token = response.body.accessToken;
    });

    it('get request to /graduate training route should have status 200 and a graduate training object sent back', async () => {
        const response = await chai.request(server)
            .get(`${path}/${id1}`)
            .set('x-access-token', token)
            .send();
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('Object');
        delete response.body.__v;
        expect(response.body).to.be.deep.equal(testGraduateTraining.find(graduate => graduate._id === id1));

    });

    it(`get request to /graduateTraining/:id route with invalid id should have status 400 and an error object sent back`, async () => {
        const response = await chai.request(server)
            .get(`${path}/nonExistentId`)
            .set('x-access-token', token)

        expect(response).to.have.status(400);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property("message", "invalid id");
    })
});