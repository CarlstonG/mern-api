import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'


import VideoRoutes from './routes/videos.routes'

const router = require('express').Router();
const app = express()


app.set('port', config.PORT);


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(VideoRoutes)
app.use(express.static('client/build'));


export default app;