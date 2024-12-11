const toggle = document.querySelector('.toggle');

// Toggle dark mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
});

// Function to update the clock (optional, for complete functionality)
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    document.querySelector('.needle.hour').style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    document.querySelector('.needle.minute').style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    document.querySelector('.needle.second').style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

    document.querySelector('.time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.querySelector('.date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

// Initial clock update
updateClock();
// Update clock every second
setInterval(updateClock, 1000);