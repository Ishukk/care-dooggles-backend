const mongoose = require('mongoose')
const Schema = mongoose.Schema

try {
    let userSchema = new Schema({
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        password: { type: String },


    }, { timestamps: true })
} catch (err) {
    if (err) throw err
}
module.export = mongoose.model('user', userSchema, 'users')