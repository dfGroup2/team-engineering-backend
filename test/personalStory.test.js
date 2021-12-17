const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');
const { expect } = require('chai');
const testPersonalStory = require('./testData/testPersonalStory.js');
const { PersonalStory } = require('../models/personalStory.model.js');

chai.use(chaiHTTP);

const path = '/personalStory';

const id1 = "61bb122f2fc37a8c901f7d3c";
const id2 = "61bb122f2fc37a8c901f7d3d";
const id3 = "61bb122f2fc37a8c901f7d3e";

xdescribe('test for Personal Story route', () => {
    beforeEach(async () => {
        await PersonalStory.deleteMany()
            .then(() => console.log('empty database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })

        await PersonalStory.insertMany(testPersonalStory)
            .then(() => console.log('entries added to database'))
            .catch(error => {
                console.log(error)
                throw new Error();
            })
    });

    xit('get request to /personal story route should have status 200 and a personal story object sent back', async () => {
        const response = await chai.request(server)
            .get(`${path}/${id1}`)
            .send();
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('Object');

        expect(response.body).to.have.property("degree");
        expect(response.body).to.have.property("schoolQualifications");
        expect(response.body).to.have.property("certificatesAndAwards");
        expect(response.body).to.have.property("portfolio");
        expect(response.body).to.have.property("workExperience");
    });

    xit(`get request to /personalStory/:id route with invalid id should have status 400 and an error object sent back`, async () => {
        const response = await chai.request(server)
            .get(`${path}/nonExistentId`)

        expect(response).to.have.status(400);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property("message", "invalid id");
    })
});