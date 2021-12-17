require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const cors = require('cors');
const Role = require('./models/authentication/role.model');

const express = require('express');
const mongoose = require('mongoose');
const graduateProfileRouter = require('./routes/graduateProfile');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();
app.use(cors());
app.use(express.json());

const Role = require('./models/authentication/role.model');
const authRouter = require('./routes/auth.routes');

function initial() {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: "graduateUser"
			}).save(err => {
				if (err) {
					console.log("error", err);
				}

				console.log("added 'graduateUser' to roles collection");
			});

			new Role({
				name: "industryPartner"
			}).save(err => {
				if (err) {
					console.log("error", err);
				}

				console.log("added 'industryPartner' to roles collection");
			});

			new Role({
				name: "dfAdmin"
			}).save(err => {
				if (err) {
					console.log("error", err);
				}

				console.log("added 'dfAdmin' to roles collection");
			});
		}
	});
}
initial();

app.use(`/api/auth`, authRouter);
app.use(`/api/content`, userRouter);

// routes
app.use(`/graduateProfiles`, graduateProfileRouter);


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


