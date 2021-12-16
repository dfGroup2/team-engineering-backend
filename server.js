require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const graduateProfileRouter = require('./routes/graduateProfile');
const graduateTrainingRouter = require('./routes/graduateTraining');
const personalStoryRouter = require('./routes/personalStory');
// const graduateUserRouter = require('./routes/graduateUser');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use(`/graduateProfiles`, graduateProfileRouter);
app.use(`/graduateTraining`, graduateTrainingRouter);
app.use(`/personalStory`, personalStoryRouter);
// app.use(`/graduateUser`, graduateUserRouter);

const main = async () => {
    console.log(`Connecting to database at ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
};
main().catch(error => console.log(error));

const server = app.listen(port, host, () => {
    const serverHOST = server.address().address;
    const serverPORT = server.address().port;
    console.log(`NodeServer listening at http://${serverHOST}:${serverPORT}/`);

})

module.exports = server;


