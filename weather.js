let unit = 'F';
let lat;
let lon;



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

            // console.log('Your lat is: ' +lat);
            // console.log('Your lon is: ' +lon);

            // Make fcc api url
            let url = 'https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
            
            // Use fcc api
            $.getJSON(url, function(weather) {
                // Get weather
                let temp = weather.main.temp;
                let city = weather.name;
                let icon = weather.weather[0].icon;
                let summary = weather.weather[0].description;

                // console.log('Unit is - ' +unit);
                // console.log('icon = ' +icon);

                // Display location on dom
                $('.city').html(city);
                
                // Display weather icon to dom 
                $('.weather-icon').html('<img class="icon" src='+icon+' alt=""/>');

                // Display decsription to DOM
                $('.summary').text(summary);
                console.log(summary);

                // Diplay temp to dom in corrent unit
                temp = temp * (9/5) + 32;
                $('.temp').html(Math.round(temp)+  ' &#8457;');

                $('.switch').click(function(event) {
                    $('.unitf').toggleClass('off on');
                    $('.unitc').toggleClass('off on');

                    // reset temp so can be used again 
                    temp = weather.main.temp;

                    if(unit === 'F'){
                        unit = 'C';
                        $('.temp').html(Math.round(temp)+ ' &#8451;');
                    }else {
                        unit = 'F';
                        temp = temp * (9/5) + 32;
                        $('.temp').html(Math.round(temp)+  ' &#8457;');
                    }

                    // console.log('click');
                    // console.log('Unit is - ' +unit);
                });
            
            });
            
        });
    }

});

