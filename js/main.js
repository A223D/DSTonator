(function () {
    const second = 1000;
    minute = second * 60;
    hour = minute * 60;
    day = hour * 24;
    alertSent = 0;

    let today = new Date();
    yyyy = today.getFullYear();
    halfDate1 = "03/13/" + yyyy;
    halfDate2 = "11/06/" + yyyy;

    if (today < halfDate1) {
        nextDate = halfDate1;
        console.log("First one")
    } else if (today > halfDate1 && today < halfDate2) {
        nextDate = halfDate2;
        console.log("Second one")
    } else {
        nextDate = "03/13/" + (yyyy + 1)
        console.log("New year")
    }

    // console.log(nextDate)
    countDown = new Date(nextDate).getTime()
    // countDown = new Date().getTime() + 10000

    

    x = setInterval(function () {


        const now = new Date().getTime();

        distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 86400000 && alertSent == 0) {
        // if (distance < 5000 && alertSent == 0) {
            alertSent = 1;

            var data = "Body=Daylight Savings switches soon. Make sure to check your calendar and sleep accordingly!&From=+TWILIONUM&To=+1MYNUM";

            var xhr = new XMLHttpRequest();
            // xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                }
            });

            xhr.open("POST", "https://api.twilio.com/2010-04-01/Accounts/MYSID/Messages.json");
            xhr.setRequestHeader("Accept-Encoding", "gzip");
            xhr.setRequestHeader("Authorization", "Basic <Auth HASH>");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            // xhr.send(data);

            document.getElementById("alerts").style.display = "block";
        }
        //do something later when date is reached
        if (distance < 0) {
            document.getElementById("headline").innerText = "DST Change has occurred";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";

            clearInterval(x);
        }
        //seconds
    }, 0)
}());

