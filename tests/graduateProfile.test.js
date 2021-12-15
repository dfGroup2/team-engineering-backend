const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const { expect } = require('chai');

chai.use(chaiHTTP);

import GraduateProfile from '../models/graduateProfile.model'
describe('test for graduate profile route', () => {
    beforeEach(async () => {
        await GraduateProfile.deleteMany()
            .then(() => console.log('empty database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })

        await GraduateProfile.insertMany()
            .then(() => console.log('entries added to database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })
    })
})
