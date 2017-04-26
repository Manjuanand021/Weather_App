const apiUrl = 'http://api.wunderground.com/api/ef111b046cb91cfe/forecast10day/q/IN/';

function getWeather(city, cb) {
    const weatherXhttp = new XMLHttpRequest();
    weatherXhttp.onreadystatechange = function () {
        console.log('blah');
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(weatherXhttp.responseText));
        }
    };
    weatherXhttp.open('GET', `${apiUrl}${city}.json`, true);
    weatherXhttp.send();
}

export {
    getWeather
};