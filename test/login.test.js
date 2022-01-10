const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const bcrypt = require('bcryptjs');
const { expect } = require('chai');
const testUserSignup = require('./testData/authenticationData/testUserSignup.json');
const testLogin = require('./testData/authenticationData/testUserLogin.json');
const Role = require('../models/authentication/role.model');
const User = require('../models/authentication/user.model');
const testRoles = require('./testData/authenticationData/testRoles.json');



chai.use(chaiHTTP);

const path = '/api/auth/signin';


describe('test for Sign in route', () => {

    beforeEach(async () => {
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

    });

    it('post request to /api/auth/signin route should have status 200 and a success message sent back', async () => {
        const response = await chai.request(server)
            .post(`${path}`)
            .send({ username: testLogin[0].username, password: testLogin[0].password });
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('Object');

        expect(response.body).to.have.property('message', 'User was registered successfully!');
    });

    xit(`post request to  /api/auth/signup story route should have status `, async () => {
        const response = await chai.request(server)
            .post(`${path}`)
            .send(testUserSignup[1]);
        // to be done
    });
});