const app = require('express')()
const { success, error } = require('consola');
var compression = require('compression')
require('./config/db')()
require('dotenv').config()


try {

} catch (err) {
    console.log(err)
    if (err) throw err
}
// app.use('/')


app.listen(process.env.PORT, success({
    message: `care-dooggle-Server is running on ${process.env.PORT}`,
    badge: true,
}));
