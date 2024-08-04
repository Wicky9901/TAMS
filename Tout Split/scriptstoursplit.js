document.addEventListener('DOMContentLoaded', function() {
    fetchUpcomingTours();
});

function fetchUpcomingTours() {
    fetch('/api/upcomingTours')
        .then(response => response.json())
        .then(tours => {
            const upcomingToursDiv = document.getElementById('upcoming-tours');
            upcomingToursDiv.innerHTML = '';
            tours.forEach(tour => {
                const tourDiv = document.createElement('div');
                tourDiv.textContent = `Tour No: ${tour.tourNo}, Name: ${tour.name}, Date: ${tour.date}, Time: ${tour.time}`;
                upcomingToursDiv.appendChild(tourDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching upcoming tours:', error);
        });
}

function cancelTour() {
    const tourNo = document.getElementById('cancel-tour-no').value;

    fetch(`/api/cancelTour/${tourNo}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(result => {
        alert('Tour canceled successfully.');
        fetchUpcomingTours();
    })
    .catch(error => {
        console.error('Error canceling tour:', error);
        alert('Failed to cancel tour.');
    });
}

function settleTour() {
    const tourNo = document.getElementById('settle-tour-no').value;
    const settlePayment = document.getElementById('settle-payment').value;

    fetch('/api/settleTour', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tourNo, settlePayment })
    })
    .then(response => response.json())
    .then(result => {
        alert('Tour payment settled successfully.');
        fetchUpcomingTours();
    })
    .catch(error => {
        console.error('Error settling tour:', error);
        alert('Failed to settle tour.');
    });
}
