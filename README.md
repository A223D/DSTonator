
## Inspiration
Winter is coming! And so is the dreaded daylight savings time switch for the North American region, confusing North Americans and the world alike 2 times each year, since March 31, 1918.

This time switch generally means late/early awakenings, missed meetings, and general pandemonium throughout the day, until everyone finally realizes the time switch. This even makes things difficult for programmers, as there is no inherent logic to changing clocks twice a year. 

On a more serious note, however, daylight savings is responsible for a 6% increase in fatal accidents in the 2 weeks in which the switch occurs, as well a similar increase in heart attacks for people who are prone to them. 

I decided to tackle this issue by creating DSTonator!

## What it does
DSTonator is a web application that monitors when a dreaded daylight savings switch is approaching. This will happen 2 times in 2023: March 12 and Nov 5.

A day before the switch happen, an alert is sent out via Twilio to my phone number, which alerts me to sleep accordingly, and check the timings for my engagements on the next day. 

Along with this, there is a countdown timer on the website as well to monitor how much time is left till a switch. There is logic to detect which switch is next. 

![](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/304/159/datas/gallery.jpg)

Once the switch happens, the screen switches, and a message is shown. Notice that the alert has also been sent out previously.

![](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/304/158/datas/gallery.jpg)

## How we built it
I have extremely limited experience with web development, and had to follow many tutorials and videos to get things working. 

I decided to go with a minimalist approach to this project, and made it completely with just:

* JavaScript
* CSS
* HTML
* Twilio

The JavaScript code takes the current time the system, and calculates how much time is left in milliseconds, and it is then converted to days, hours, minutes, and seconds. 

CSS and HTML was used to create a minimalist, yet functional UI.

24 hours before the switch, the system sends an alert to me using Twilio:

![](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/304/239/datas/gallery.jpg)
## Challenges we ran into
* I don't have too much experience with web development, so it took me a lot of time to get the JavaScript logic working with the webpage.
* One main challenge for me was using the REST API for Twilio. Using XMLHTTPRequest turned out very difficult for me.
* I wanted to have a form to add multiple phone numbers to send the alerts to, however time ran out before I could figure that out.

## Accomplishments that we're proud of
* POST request from the browser
* Creating a functioning application using basic JavaScript, HTML, and CSS.

## What we learned
* Sending an HTTP request from the browser was a task I have not done before, 
* How to take input from an HTML form and use in JavaScript.

## What's next for DSTonator
* Adding a form for people to provide their number to receive alerts
* Adding email support along with phone.
