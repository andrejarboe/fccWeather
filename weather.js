let unit = 'F';
let lat;
let lon;

$('.switch').click(function(event) {
    $('.unitf').toggleClass('off on');
    $('.unitc').toggleClass('off on');

    if(unit === 'F'){
        unit = 'C';
    }else unit = 'F';

    console.log('click');
    console.log('Unit is - ' +unit);
});

function date(date) {
    var monthNames = [
        "Jan.", "Feb.", "Mar.",
        "Apr.", "May", "Jun.", "Jul.",
        "Aug.", "Sept.", "Oct.",
        "Nov.", "Dec."
    ];

    var weekdayNames = [
        "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",
    ];

    var weekdayIndex = date.getDay();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    $('#date').text(weekdayNames[weekdayIndex] + ', ' + monthNames[monthIndex] + ' ' + day + ', ' + year);
}

date(new Date());

$(document).ready(function() {    
    // Get location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;

            // Make fcc api url
            let url = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
            // Use fcc api
            $.getJSON(url, function(weather) {
            // Get weather
            let temp = weather.main.temp;
            let city = weather.name;
            console.log('Unit is - ' +unit);
            // Display location on dom
            $('.city').html(city);
            
            // Display weather icon to dom 
            // Display decsription to DOM
            // Diplay temp to dom 
            $('.temp').html(temp);
            });
            
        });
    }

});

