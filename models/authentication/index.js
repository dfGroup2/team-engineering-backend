const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

// db = { mongoose: mongoose}
db.mongoose = mongoose;

//  db = { 
// 	mongoose: mongoose,
// 	user: User,
// 	role: Role
// }

db.user = require("./user.model");
db.role = require("./role.model");

//  db = { 
// 	mongoose: mongoose,
// 	user: User,
// 	role: Role,
//	ROLES: ["graduateUser", "industryUser", "dfAdmin"]
// }

db.ROLES = ["graduateUser", "industryUser", "dfAdmin"];

module.exports = db;
