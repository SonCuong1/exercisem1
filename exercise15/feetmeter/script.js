function footToMeter(foot) {
    foot = parseInt(prompt("Enter foots"));
    let meter = 0.305 * foot
    document.write(`${foot}ft is ${meter}m <br>`)
}

function meterToFoot(meter) {
    meter = parseInt(prompt("Enter meters"));
    let foot = 3.279 * meter
    document.write(`${meter}m is ${foot}ft`)
}

footToMeter();
meterToFoot();