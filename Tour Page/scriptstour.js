document.addEventListener('DOMContentLoaded', function() {
    generateTourNumber();
});

function generateTourNumber() {
    // Generate a unique tour number (for demonstration, using timestamp)
    const tourNo = 'TOUR-' + Date.now();
    document.getElementById('tour-no').value = tourNo;
}

function submitTour() {
    const tourData = {
        tourNo: document.getElementById('tour-no').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        name: document.getElementById('name').value,
        person: document.getElementById('person').value,
        tour: document.getElementById('tour').value,
        totalPrice: document.getElementById('total-price').value,
        payToday: document.getElementById('pay-today').value,
        needToPay: document.getElementById('need-to-pay').value,
        timestamp: new Date().toISOString()
    };

    fetch('/api/saveTour', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tourData)
    })
    .then(response => response.json())
    .then(result => {
        alert('Tour saved successfully.');
        clearForm();
        generateTourNumber();
    })
    .catch(error => {
        console.error('Error saving tour:', error);
        alert('Failed to save tour.');
    });
}

function clearForm() {
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('name').value = '';
    document.getElementById('person').value = '';
    document.getElementById('tour').value = '';
    document.getElementById('total-price').value = '';
    document.getElementById('pay-today').value = '';
    document.getElementById('need-to-pay').value = '';
}

function clearLastTour() {
    fetch('/api/clearLastTour', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(result => {
        alert('Last tour cleared successfully.');
    })
    .catch(error => {
        console.error('Error clearing last tour:', error);
        alert('Failed to clear last tour.');
    });
}
