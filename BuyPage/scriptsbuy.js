function calculatePrice() {
    const amount = document.getElementById('amount').value;
    const rate = document.getElementById('rate').value;
    const priceElement = document.getElementById('price');

    if (amount && rate) {
        const price = amount * rate;
        priceElement.value = price.toFixed(2);
    } else {
        alert('Please enter both amount and rate.');
    }
}

function saveCalculation() {
    const moneyType = document.getElementById('money-type').value;
    const amount = document.getElementById('amount').value;
    const rate = document.getElementById('rate').value;
    const price = document.getElementById('price').value;

    if (moneyType && amount && rate && price) {
        const calculation = {
            moneyType,
            amount,
            rate,
            price,
            timestamp: new Date().toISOString()
        };

        fetch('/api/saveCalculation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(calculation)
        })
        .then(response => response.json())
        .then(result => {
            alert('Calculation saved successfully.');
            clearForm();
        })
        .catch(error => {
            console.error('Error saving calculation:', error);
            alert('Failed to save calculation.');
        });
    } else {
        alert('Please complete the form before saving.');
    }
}

function clearForm() {
    document.getElementById('money-type').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('price').value = '';
}

function clearLastEntry() {
    fetch('/api/clearLastEntry', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(result => {
        alert('Last entry cleared successfully.');
    })
    .catch(error => {
        console.error('Error clearing last entry:', error);
        alert('Failed to clear last entry.');
    });
}
