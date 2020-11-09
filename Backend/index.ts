import app from './src/app'
import './src/database'
import path from 'path';

const router = require('express').Router();



//created Env on a separate route
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})


// let git and heruko knows that I am Joining and connecting to frontend
router.use("*", () => {
    router.sendFile(path.join(__dirname, '../client/build/index.html'))
})

