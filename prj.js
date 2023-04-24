const updateTime = () => {
    const now = new Date();
    const timeElem = document.getElementById("time");
    timeElem.textContent = `Current time is ${now.toLocaleTimeString()}`;
};

// Update the time every second
setInterval(updateTime, 1000);