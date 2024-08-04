function calculateProfit(inputElement) {
    const row = inputElement.closest('.row');
    const amount = row.querySelector('.amount').value;
    const buyRate = row.querySelector('.buy-rate').value;
    const sellRate = row.querySelector('.sell-rate').value;
    const profitElement = row.querySelector('.profit');

    if (amount && buyRate && sellRate) {
        const profit = (sellRate - buyRate) * amount;
        profitElement.value = profit.toFixed(2);
    }

    calculateTotalProfit();
}

function calculateTotalProfit() {
    const profitElements = document.querySelectorAll('.profit');
    let totalProfit = 0;

    profitElements.forEach(profitElement => {
        const profit = parseFloat(profitElement.value) || 0;
        totalProfit += profit;
    });

    document.getElementById('total-profit').value = totalProfit.toFixed(2);
}

function exportReport(period) {
    // Mock example of saving data and exporting report
    const data = gatherData();
    
    fetch('/api/exportReport', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ period, data })
    })
    .then(response => response.json())
    .then(result => {
        alert(`Report for ${period} exported successfully.`);
    })
    .catch(error => {
        console.error('Error exporting report:', error);
        alert('Failed to export report.');
    });
}

function gatherData() {
    const rows = document.querySelectorAll('.row');
    const data = [];

    rows.forEach(row => {
        const moneyType = row.querySelector('.money-type').value;
        const amount = row.querySelector('.amount').value;
        const buyRate = row.querySelector('.buy-rate').value;
        const sellRate = row.querySelector('.sell-rate').value;
        const profit = row.querySelector('.profit').value;

        if (moneyType && amount && buyRate && sellRate) {
            data.push({ moneyType, amount, buyRate, sellRate, profit });
        }
    });

    return data;
}
