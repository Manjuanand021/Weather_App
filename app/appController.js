import {
    DOMStrings,
    addKeyPressEvent,
    toggleSearchProgress,
    getSearchBoxValue,
    updateLocation,
    colors,
    icons
} from './uiController';
import {
    getWeather
} from './dataController';



function processWeather(weather) {    
    const weatherDays = weather.forecast.simpleforecast.forecastday.slice(0,5);
    weatherDays.forEach((day, index) => {        
        displayWeather(day, index);        
    });
}

//key press event handler
function onKeyPress(event) { 
    //use which for older browsers
    if (event.keyCode === 13 || event.which === 13) {
        toggleSearchProgress(true);
        const city =getSearchBoxValue(); 
        //Update location
        updateLocation(city);
        //Get weather Data
        getWeather(city, processWeather);
    }    
}

function displayWeather(day, index) {
    let htmlString, newHtml;
    htmlString = '<div class="col col-%color_class%"><div class="icon icon-%color_class%"><i class="%cloud_class%"></i></div><div class="content"><h2>%date%</h2><h1><i class="ion-ios-arrow-thin-up"></i>&nbsp;%high%<sup>&deg;</sup>,<i class="ion-ios-arrow-thin-down"></i>&nbsp;%low%<sup>&deg;</sup></h1><h6>%condition%</h6><h6>W - %wind% mph</h6></div></div>';    
    newHtml = htmlString.replace(/%color_class%/g, colors[index]);
    newHtml = newHtml.replace('%date%', `${day.date.monthname}, ${day.date.day} ${day.date.year}`);
    newHtml = day.high.celsius !== '' ? newHtml.replace('%low%', `${day.low.celsius}`) : newHtml.replace('%low%', `0`);
    newHtml = day.high.celsius !== '' ? newHtml.replace('%high%', `${day.high.celsius}`) : newHtml.replace('%high%', `0`);
    newHtml = newHtml.replace('%condition%', `${day.conditions}`);
    newHtml = newHtml.replace('%wind%', `${day.maxwind.mph}`);

    //Change icons
    const iconKeys = Object.keys(icons);
    iconKeys.forEach((key)=>{
        if(day.icon === key)
            newHtml = newHtml.replace('%cloud_class%', icons[day.icon]);            
    });
    

    //Insert HTML to DOM    
    document.querySelector('.weather-cols').insertAdjacentHTML('beforeend', newHtml);
    toggleSearchProgress(false);    
}

function kickStartApp() {
    addKeyPressEvent(onKeyPress);
}

export default kickStartApp();