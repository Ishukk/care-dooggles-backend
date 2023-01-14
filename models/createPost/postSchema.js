const mongoose = require('mongoose')
const Schema = mongoose.Schema

try {
    let postSchema = new Schema({
        headline: { type: String },
        description: { type: String },
        image: { type: String },
        password: { type: String },


    }, { timestamps: true })
} catch (err) {
    if (err) throw err
}
module.export = mongoose.model('post', postSchema, 'posts')