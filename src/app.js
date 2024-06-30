const express = require('express')
const app = express()
const mongoose = require('mongoose');
const userRouter = require('Router')

import config from "./config.js"; //testado
console.log(config)

app.use(express.json());
app.use('/api', userRouter)

mongoose.connect('mongodb+srv://larigeorgiab:pjZXp2sd0VdZIh3G@cluster0.cnn9ujw.mongodb.net', {
    retryWrites: true,
    w: 'majority',
    appName: 'estudo-dirigido'
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});