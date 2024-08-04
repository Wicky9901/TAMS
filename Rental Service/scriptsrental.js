document.getElementById('daysNeeded').addEventListener('input', function() {
    const startDate = document.getElementById('startDate').value;
    const daysNeeded = document.getElementById('daysNeeded').value;
    if (startDate && daysNeeded) {
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + parseInt(daysNeeded));
        document.getElementById('endDate').value = endDate.toISOString().split('T')[0];
    }
});

function saveData() {
    const rentalData = {
        vehicleType: document.getElementById('vehicleType').value,
        vehicleNo: document.getElementById('vehicleNo').value,
        passportNo: document.getElementById('passportNo').value,
        rentalPersonName: document.getElementById('rentalPersonName').value,
        startDate: document.getElementById('startDate').value,
        daysNeeded: document.getElementById('daysNeeded').value,
        endDate: document.getElementById('endDate').value,
        howMuchPayToday: document.getElementById('howMuchPayToday').value,
        totalPrice: document.getElementById('totalPrice').value,
    };

    rentalData.needToPay = rentalData.totalPrice - rentalData.howMuchPayToday;
    document.getElementById('needToPay').value = rentalData.needToPay;

    // Here you would send the rentalData to the server
    console.log('Saving data:', rentalData);
    alert('Data saved successfully!');
}

function settlePayment() {
    const settleData = {
        vehicleNo: document.getElementById('settleVehicleNo').value,
        settlePayment: document.getElementById('settlePayment').value,
    };

    // Here you would send the settleData to the server
    console.log('Settling payment:', settleData);
    alert('Payment settled successfully!');
}
