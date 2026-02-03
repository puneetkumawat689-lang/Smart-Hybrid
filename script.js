const toggle = document.getElementById('theme-toggle');
const clickSound = document.getElementById('click-sound');

// Theme Switch with Sound
toggle.addEventListener('change', () => {
    clickSound.play(); // Play sound on click
    document.body.classList.toggle('dark-mode');
});

function updateClock() {
    let date = new Date();
    
    // Time Logic
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Analog
    document.getElementById('hour').style.transform = `rotate(${(30 * hr) + (min / 2)}deg)`;
    document.getElementById('minute').style.transform = `rotate(${6 * min}deg)`;
    document.getElementById('second').style.transform = `rotate(${6 * sec}deg)`;

    // Digital 12-Hour
    let ampm = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12 || 12;
    document.getElementById('digital-display').innerText = 
        `${hr < 10 ? '0'+hr : hr}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`;
    document.getElementById('ampm').innerText = ampm;

    // Date & Day Logic
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    document.getElementById('day-name').innerText = days[date.getDay()];
    document.getElementById('full-date').innerText = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

setInterval(updateClock, 1000);
updateClock();