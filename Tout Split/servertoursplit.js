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

app.get('/api/upcomingTours', (req, res) => {
    res.json(tours);
});

app.delete('/api/cancelTour/:tourNo', (req, res) => {
    const tourNo = req.params.tourNo;
    tours = tours.filter(tour => tour.tourNo !== tourNo);
    console.log('Canceled tour:', tourNo);

    res.json({ message: 'Tour canceled successfully.' });
});

app.post('/api/settleTour', (req, res) => {
    const { tourNo, settlePayment } = req.body;
    const tour = tours.find(tour => tour.tourNo === tourNo);
    if (tour) {
        tour.needToPay -= settlePayment;
        console.log('Settled tour:', tourNo);

        res.json({ message: 'Tour payment settled successfully.' });
    } else {
        res.status(404).json({ message: 'Tour not found.' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
