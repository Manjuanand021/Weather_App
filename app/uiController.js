const DOMStrings = {
    inputBox: '.city-input',
    location: '.city',
    searchProgress: 'search-progress'
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
    chancetstorms : 'ion-ios-thunderstorm',
    clear : 'ion-ios-cloudy',
    partlycloudy: 'ion-ios-cloudy-night',
    chancerain:'ion-ios-rainy'
}

const inputBox = document.querySelector(DOMStrings.inputBox);
//Common Add event listener
function addCustomEventListener(ctrl, eventName, eventHandler) {
    ctrl.addEventListener(eventName, eventHandler);
}

//add keypress event to search box
function addKeyPressEvent(onKeyPress) {
    addCustomEventListener(inputBox, MouseEvents.onKeyPress, onKeyPress);
}

function getSearchBoxValue(){
    return inputBox.value;
}

function toggleSearchProgress(isProgress) {
    isProgress ? inputBox.classList.add(DOMStrings.searchProgress) : inputBox.classList.remove(DOMStrings.searchProgress);
}

function updateLocation(city){
    document.querySelector(DOMStrings.location).textContent = `${city}.`;
}

export {
    DOMStrings,
    addKeyPressEvent,
    toggleSearchProgress,
    getSearchBoxValue,
    updateLocation,
    colors,
    icons
}