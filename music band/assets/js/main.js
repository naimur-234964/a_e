function updateTime() {
    var now = new Date();
    var date = now.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    var time = now.toLocaleTimeString();
    document.getElementById("time").textContent = time + ' ' + date;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
