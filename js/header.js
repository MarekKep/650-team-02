(function() {
    const clock = document.querySelector('.time');
    function updateClock() {
        clock.innerText = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
})();