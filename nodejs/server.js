import express from 'express';
import {config} from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB';
import initWebRoute from './routes/web';
var cors = require('cors');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
initWebRoute(app);
connectDB();

config()
let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log('Successfully running on Port:', port)
})