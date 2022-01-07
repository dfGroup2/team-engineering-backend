const chai = require('chai');
const chaiHTTP = require('chai-http');
const bcrypt = require('bcryptjs');
const server = require('../server');
const { expect } = require('chai');
const GraduateUser = require('../models/graduateUser.model.js');
const testGraduateUsers = require('./testData/testGraduateUsers.json');
const User = require('../models/authentication/user.model');
const Role = require('../models/authentication/role.model');
const testUserSignup = require('./testData/authenticationData/testUserSignup.json');
const testRoles = require('./testData/authenticationData/testRoles.json');

chai.use(chaiHTTP);

const path = '/api/content/graduateUsers';

const id1 = testGraduateUsers[0]._id;

describe('test for graduate user route', () => {
	let token;
	let id;
	beforeEach(async () => {
		await GraduateUser.deleteMany()
			.then(() => console.log('empty database'))
			.catch(error => {
				console.log(error)
				throw new Error();
			})

		await GraduateUser.insertMany(testGraduateUsers)
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
		const user = new User({ username, email, password: passwordHash, roles: [testRoles[0]._id], graduateUserData: id1 });
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

	afterEach(() => {
		id = null;
		token = null;
	});

	it('get request to /graduate user route should have status 200 and a graduate user object sent back', async () => {
		const response = await chai.request(server)
			.get(`${path}/${id1}`)
			.set('x-access-token', token)
			.send();
		expect(response).to.have.status(200);
		expect(response.body).to.be.an('Object');
		delete response.body.__v;
		expect(response.body).to.be.deep.equal(testGraduateUsers.find(graduate => graduate._id === id1));

	});

	it(`get request to /graduateProfile/:id route with invalid id should have status 400 and an error object sent back`, async () => {
		const response = await chai.request(server)
			.get(`${path}/nonExistentId`)
			.set('x-access-token', token)

		expect(response).to.have.status(400);
		expect(response.body).to.be.an('object');
		expect(response.body).to.have.property("message", "invalid id");
	})
});
