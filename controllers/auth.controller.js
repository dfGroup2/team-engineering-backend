const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config/auth.config');
const db = require('../models/authentication/index');

const User = db.user;
const Role = db.role;
const GraduateUser = require('.././models/graduateUser.model');
const GraduateProfile = require('.././models/graduateProfile.model');
const GraduateTraining = require('.././models/graduateTraining.model');
const PersonalInfo = require('.././models/personalInfo.model');
const PersonalStory = require('.././models/personalStory.model');

const testGraduateProfiles = require('.././test/testData/testGraduateProfile.json');
const testGraduateTrainingData = require('.././test/testData/testGraduateTraining.json');
const testPersonalInfo = require('.././test/testData/testPersonalInfo.json');
const testPersonalStories = require('.././test/testData/testPersonalStory');

const signup = (req, res) => {

	const defaultGraduateProfile = new GraduateProfile(JSON.parse(testGraduateProfiles)[0]);
	const defaultGraduateTraining = new GraduateTraining(JSON.parse(testGraduateTrainingData)[0]);
	const defaultPersonalInfo = new PersonalInfo(JSON.parse(testPersonalInfo)[0]);
	const defaultPersonalStory = new PersonalStory(testPersonalStories[0]);

	const newGraduateUser = new GraduateUser({
		"graduateProfile": defaultGraduateProfile,
		"graduateTraining": defaultGraduateTraining,
		"personalInfo": defaultPersonalInfo,
		"personalStory": defaultPersonalStory
	})

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
		graduateUserData: newGraduateUser
	});

	user.save((err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		if (req.body.roles) {
			Role.find(
				{
					name: { $in: req.body.roles }
				},
				(err, roles) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					user.roles = roles.map(role => role._id);
					user.save(err => {
						if (err) {
							res.status(500).send({ message: err });
							return;
						}

						res.send({ message: "User was registered successfully!" });
					});
				}
			);
		} else {
			Role.findOne({ name: "graduateUser" }, (err, role) => {
				if (err) {
					res.status(500).send({ message: err });
					return;
				}

				user.roles = [role._id];
				user.save(err => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}

					res.send({ message: "Graduate User was registered successfully!" });
				});
			});
		}
	});
};

const signin = (req, res) => {
	User.findOne({
		username: req.body.username
	})
		.populate("roles", "-__v")
		.exec((err, user) => {
			if (err) {
				res.status(500).send({ message: err });
				return;
			}

			if (!user) {
				return res.status(404).send({ message: "User Not found." });
			}

			var passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "Invalid Password!"
				});
			}

			var token = jwt.sign({ id: user.id }, config.secret, {
				expiresIn: 86400 // 24 hours
			});

			var authorities = [];

			for (let i = 0; i < user.roles.length; i++) {
				authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
			}

			res.status(200).send({
				id: user._id,
				username: user.username,
				email: user.email,
				roles: authorities,
				accessToken: token
			});
		});
};

module.exports = { signin, signup };