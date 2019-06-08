const http = require('http');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express');
const api = express();
const server = http.createServer(api);
const PORT = process.env.PORT || 5000;
const middleWare = require('./middleware/index')
const dbConnect = require('./db')

//For moongoose connectivity
dbConnect();
api.use(express.json());
api.use(morgan('dev'));
api.use(cors());
api.use(express.static('public'));
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({
  extended: false
}))
api.use(middleWare());
server.listen(PORT, () => {`server listening on port: ${PORT}`});
