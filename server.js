require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const cors = require('cors');
const express = require('express');


const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

const server = app.listen(port, host, () => {
	const serverHOST = server.address().address;
	const serverPORT = server.address().port;
	console.log(`NodeServer listening at http://${serverHOST}:${serverPORT}/`);
})


