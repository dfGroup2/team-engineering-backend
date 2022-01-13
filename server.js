require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const Role = require('./models/authentication/role.model');
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
		}
	});
}

initial();

// routes
app.use(`/api/auth`, authRouter);
app.use(`/api/content`, userRouter);


// Mongoose connection to local MongoDB
const main = async () => {
	console.log(`Connecting to database at ${process.env.DB_LOCAL_URI}`);
	await mongoose.connect(`${process.env.DB_LOCAL_URI}`);
};
main().catch(error => console.log(error));

// Mongoose connection to MongoDB Atlas cloud database
// const main = async () => {
// 	console.log(`Connecting to database at ${process.env.DB_URI}`);
// 	await mongoose.connect(`${process.env.DBPROTOCOL}://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/${process.env.DB}?${process.env.DBOPTIONS}`);
// };
// main().catch(error => console.log(error));


// Node/Express Server
const server = app.listen(port, host, () => {
	const serverHOST = server.address().address;
	const serverPORT = server.address().port;
	console.log(`NodeServer listening at http://${serverHOST}:${serverPORT}/`);

})

module.exports = server;


