var clock = setInterval(clockTiming, 1000)
// here we called a function and defined the time interval in milliseconds after which it should be called

// to fetch time easily

function clockTiming() {
    var d = new Date();
    var count = d.toLocaleTimeString();
    document.getElementById('showClock').innerHTML = count;
}

// by this we get whole time zone and time
// document.write(d);