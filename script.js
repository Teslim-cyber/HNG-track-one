function updateTime() {
    const currentTimeUTC = new Date().toUTCString();
    document.querySelector(
        '[data-testid="currentTimeUTC"]'
    ).textContent = currentTimeUTC;
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const currentDay = days[new Date().getUTCDay()];
    document.querySelector(
        '[data-testid="currentDay"]'
    ).textContent = currentDay;
}

setInterval(updateTime, 1000);
updateTime();