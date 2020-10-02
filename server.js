const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
        {
            title: 'Eat Out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 375
        },
        {
            title: 'Grocery',
            budget: 110
        },
        {
            title: 'Entertainment',
            budget: 55
        },
        {
            title: 'Gas',
            budget: 150
        },
        {
            title: 'House Repairs',
            budget: 300
        },
        {
            title: 'Alimony',
            budget: 500
        },
    ]
};

 app.get('/hello', (req, res) => {
    res.send('Hello World');
 });

 app.get('/budget', (req, res) => {
     const data = require('./budget');
    res.json(data);
 });

 app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000');
 });