const cors = require('cors');
const Role = require('./models/authentication/role.model');

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