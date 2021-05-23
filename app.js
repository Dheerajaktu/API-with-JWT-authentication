const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        success: 1,
        message: 'This is default Route of API'
    });
})



app.listen('5000', () => {
    console.log('Server Started at port: 5000');
})