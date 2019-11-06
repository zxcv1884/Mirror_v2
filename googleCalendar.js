const fs = require('fs');
const {google} = require('googleapis');
// const mysql = require('mysql');
// const select = document.getElementById("usermail");
const todo = document.querySelector('.googleCalendar');
// let email = select.innerHTML;
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "server"
// });

fs.readFile('credentials.json', (err, content) => {
    authorize(JSON.parse(content), listEvents);
});

function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
    con.query("SELECT `googleCalendar` FROM `users` WHERE `email` = '"+email +"'", function (error, result) {
        oAuth2Client.setCredentials(JSON.parse(result[0].googleCalendar));
        callback(oAuth2Client);
    });
    // });
}
function listEvents(auth) {
    const calendar = google.calendar({version: 'v3', auth});
    calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length) {
            console.log('Upcoming 10 events:');
            events.map((event, i) => {
                const start = event.start.dateTime || event.start.date;
                todo.innerText = (`${start} - ${event.summary}`);
            });
        } else {
            console.log('No upcoming events found.');
        }
    });
}
