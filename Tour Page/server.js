const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let tours = [];

app.post('/api/saveTour', (req, res) => {
    const tour = req.body;
    tours.push(tour);
    console.log('Saved tour:', tour);

    res.json({ message: 'Tour saved successfully.' });
});

app.post('/api/clearLastTour', (req, res) => {
    tours.pop();
    console.log('Last tour cleared.');

    res.json({ message: 'Last tour cleared successfully.' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
