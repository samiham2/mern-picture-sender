const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true, unique: false, trim: true },
    phonenumber: { type: String, required: true, unique: true, trim: true, minlength: 8 },
    imagename: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;