function sign() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'vihanga' && password === '12345678') {
        window.location.href = 'file:///C:/Users/ACER/Desktop/ffff/front/dashboard/dashboard.html';
    } else {
        alert('Incorrect username or password.');
    }
}

function clearForm() {
    document.getElementById('loginForm').reset();
}
