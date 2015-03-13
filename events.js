var API_key = 'AIzaSyCO6Xii2CIVBd18g2-YsM3LcazD6CXLn-g';

var calendar_base_url = 'https://www.googleapis.com/calendar/v3/calendars/';

var calendar_ID = '6q1k9rf46qjruepg4dq9d5bu28%40group.calendar.google.com';

var now = new Date().toISOString();

var calendar_json_url = calendar_base_url + calendar_ID + '/events?singleEvents=true&orderBy=startTime&timeMin=' + now + '&maxResults=5&key=' + API_key;

$.getJSON(calendar_json_url, function(data) {
    $.each(data.items, function(i, item){
     
        console.log('INDIVIDUAL EVENT #', i, item);
        $('#events').append('<h5>' + item.summary + '</h5><em>' + item.start.dateTime + ' &#124; ' + item.location + '</em><br><br>' + item.description);
         
    });
});