const express = require ('express');
const fs = require ('fs');

const PORT = 3001;



app.use(express.json());

app.get('/api/index', (req, res) => {
    console.info(`${req.method} request received to get notes`);
    return res.json(index);

});


 app.post('/api/index', (req, res) => {
        console.info(`${req.method} request received to add a note`);
});