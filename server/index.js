// const express = require('express');
import express from 'express';
import Connection from './database/db.js';
import  dotenv from 'dotenv';
import defaultData from './Default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const App  = express();

dotenv.config();

App.use(cors());
App.use(bodyParser.json({extended : true}));
App.use(bodyParser.urlencoded({extended : true}));
App.use('/',router);

const port = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

App.listen(port , ()=>console.log(`running on port ${port} hy`))

defaultData();





