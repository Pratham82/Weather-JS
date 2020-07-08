//* Local storage initialization

const storage = new Storage();

// Get location
const weatherLocation = storage.getLocationData();

//* Initialize objects
let weatherInfo = new Weather(weatherLocation.city);

let ui = new UI();

//Changing the city and state via modal

// Get weather info once the DOM is loaded
document.addEventListener("DOMContentLoaded", getWeather);

// Change location
document.getElementById("w-change-btn").addEventListener("click", (e) => {
	const city = document.getElementById("city").value;
	//const countyCode = document.getElementById("country").value;

	// Change location after getting it from user
	//weatherInfo.changeLocation(city, countyCode);
	weatherInfo.changeLocation(city);

	// Set location in local storage
	//storage.setLocationData(city, countyCode);
	storage.setLocationData(city);

	//Again call get weather
	getWeather();

	//Close the modal
	$("#locModal").modal("hide");
});

// This function will be called when the DOM loads
function getWeather() {
	weatherInfo
		.getWeather()
		.then((res) => ui.injectData(res))
		.catch(() =>
			ui.noResponse(
				"City not Found, please enter correct spelling ",
				"alert alert-danger"
			)
		);
}
