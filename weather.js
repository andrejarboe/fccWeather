

$(document).ready(function(){
    // Display City Name
    $.getJSON("http://ip-api.com/json/", function(location) {
        let city = location.city;

        $('.location').text(city);
    });


    function date(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var weekdayNames = [
            "Mon", "Tue", "Wed", 
            "Thur", "Fri", "Sat", 
            "Sun"
        ];

        var weekdayIndex = date.getDay();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        $('#date').text(weekdayNames[weekdayIndex] + ', ' + monthNames[monthIndex] + ' ' + day + ', ' + year);
    }

    date(new Date());

   $('.switch').click(function (event) {
        $('.unitf').toggleClass('off on');
        $('.unitc').toggleClass('off on');
        console.log('click');       
       
    });

     unit = '&#8457';
    // Get location and add it to api
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
            const apiKey = '9d0ccd8c6bf2ca3137de395f722b7d1a';
            let lat = position.coords.latitude;
            let lon = position.coords.longitude

            // Get weather
            $.getJSON("https://crossorigin.me/https://api.darksky.net/forecast/"+apiKey+"/"+lat+","+lon, 
                function(weather) {
                    currentSum = weather.currently.summary;
                    icon = weather.currently.icon;
                    temp = weather.currently.temperature;
                    

                    $('.temp').html(temp+ ' ' +unit);

                    switch(icon) {
                        case 'clear-day':
                            $('.weather-icon').html('<i class="wi wi-day-sunny"></i>');
                            break;
                        case 'clear-night':
                            $('.weather-icon').html('<i class="wi wi-night-clear"></i>');
                            break;
                        case 'rain':
                            $('.weather-icon').html('<i class="wi wi-rain"></i>');
                            break;                            
                        case 'snow':
                            $('.weather-icon').html('<i class="wi wi-snowflake-cold"></i>');
                            break;                            
                        case 'sleet':
                            $('.weather-icon').html('<i class="wi wi-sleet"></i>');
                            break;                            
                        case 'wind':
                            $('.weather-icon').html('<i class="wi wi-windy"></i>');
                            break;                            
                        case 'fog':
                            $('.weather-icon').html('<i class="wi wi-fog"></i>');
                            break;                            
                        case 'cloudy':
                            $('.weather-icon').html('<i class="wi wi-cloudy"></i>');
                            break;                            
                        case 'partly-cloudy-day':
                            $('.weather-icon').html('<i class="wi wi-day-cloudy"></i>');
                            break;                            
                        case 'partly-cloudy-night':
                            $('.weather-icon').html('<i class="wi wi-night-alt-cloudy"></i>');
                            break;                            
                        case 'hail':
                            $('.weather-icon').html('<i class="wi wi-hail"></i>');
                            break;                            
                        case 'thunderstorm':
                            $('.weather-icon').html('<i class="wi wi-thunderstorm"></i>');
                            break;                            
                        case 'tornado':
                            $('.weather-icon').html('<i class="wi wi-tornado"></i>');
                    }
                    console.log(currentSum);
                    console.log(icon);
                });    
        });
    } 


  
    

});
