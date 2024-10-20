// Display Real-time Clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `Current Time (EAT): ${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();

// Admin Login Verification
document.getElementById('adminLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    
    if(password === 'dF?8Q2sopLZmn') {
        alert('Admin Login Successful');
        // Add additional admin privileges after login
    } else {
        alert('Incorrect Password');
    }
});