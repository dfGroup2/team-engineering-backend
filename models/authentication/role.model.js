const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: String,
});

const Role = new mongoose.model("Role", roleSchema);

module.exports = Role;
