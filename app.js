"use strict";
$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("myWeather").val()}&appid=bc2c00e8e5f27b506fbea3429ba7a3b2`
        }
    });
});