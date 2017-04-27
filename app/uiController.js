const DOMStrings = {
    inputBox: '.city-input',
    location: '.city',
    searchProgress: 'search-progress',
    weatherContent: '.weather-cols'
};
const MouseEvents = {
    onKeyPress: 'keypress',
    onKeyUp: 'keyup'
}
const colors = [
    'yellow',
    'purple',
    'cyan',
    'alizarin',
    'peter-river'
];
const icons = {
    chancetstorms: 'ion-ios-thunderstorm',
    clear: 'ion-ios-partlysunny',
    partlycloudy: 'ion-ios-cloudy',
    chancerain: 'ion-ios-rainy',
    tstorms: 'ion-ios-thunderstorm'
}

const inputBox = document.querySelector(DOMStrings.inputBox);
const weatherContent = document.querySelector(DOMStrings.weatherContent);
//Common Add event listener
function addCustomEventListener(ctrl, eventName, eventHandler) {
    ctrl.addEventListener(eventName, eventHandler);
}

//add keypress event to search box
function addKeyPressEvent(onKeyPress) {
    //Add event listener
    addCustomEventListener(inputBox, MouseEvents.onKeyPress, onKeyPress);
}

function getSearchBoxValue() {
    return inputBox.value;
}

function toggleSearchProgress(isProgress) {
    isProgress ? inputBox.classList.add(DOMStrings.searchProgress) : inputBox.classList.remove(DOMStrings.searchProgress);
}

function updateLocation(city) {
    document.querySelector(DOMStrings.location).textContent = `${city}.`;
}

function addWeatherHTMLContent(html) {
    //Add wetaher content
    weatherContent.insertAdjacentHTML('beforeend', html);
}

function removeWeatherHTMLContent() {
    // console.log(weatherContent);
    while (weatherContent.hasChildNodes()) {
        console.log('object');
        weatherContent.removeChild(weatherContent.lastChild);
    }
}

export {
    DOMStrings,
    addKeyPressEvent,
    toggleSearchProgress,
    getSearchBoxValue,
    updateLocation,
    addWeatherHTMLContent,
    removeWeatherHTMLContent,
    colors,
    icons
}