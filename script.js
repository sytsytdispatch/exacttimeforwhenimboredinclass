let militaryTime = true;
let timeZone = 'UTC';

function updateTime() {
    const now = new Date();
    const options = { 
        timeZone, 
        hour12: !militaryTime, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        fractionalSecondDigits: 3 
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(now);
    document.getElementById('time').textContent = formattedTime;
}

document.getElementById('toggleFormat').addEventListener('click', () => {
    militaryTime = !militaryTime;
    document.getElementById('toggleFormat').textContent = militaryTime ? 'Switch to AM/PM' : 'Switch to Military Time';
});

document.getElementById('timezoneSelect').addEventListener('change', (event) => {
    timeZone = event.target.value;
});

setInterval(updateTime, 10); // Update time every 10 milliseconds
