const {mongodb} = require('./config')
const mongoose = require('mongoose')
module.exports = function database() {
	mongoose.connect(mongodb.dbURI,{ useNewUrlParser: true }, () => {
		console.log('Connected to mongodb')
	});
}
