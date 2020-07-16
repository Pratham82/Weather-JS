// Class for adding all the weatherinfo in to DOM

class UI {
	constructor() {
		this.location = document.getElementById("w-location");
		this.desc = document.getElementById("w-desc");
		this.string = document.getElementById("w-string");
		this.details = document.getElementById("w-details");
		this.icon = document.getElementById("w-icon");
		this.humidity = document.getElementById("w-humidity");
		this.dewPoint = document.getElementById("w-dewpoint");
		this.feelsLike = document.getElementById("w-feels-like");
		this.pressure = document.getElementById("w-pressure");
		this.wind = document.getElementById("w-wind");
		this.icon1 = document.getElementById("icon1");
	}

	injectData(response) {
		this.location.textContent = response.name;
		this.desc.textContent = response.weather[0].main;
		this.desc.textContent = response.weather[0].description;
		var iconcode = response.weather[0].icon;
		var iconurl =
			"http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
		// console.log(iconurl);
		// console.log(this.icon);
		$(this.icon).attr("src", iconurl);
		this.icon.style.height = "100px";
		this.icon.style.width = "100px";
		this.string.textContent = response.main.temp.toFixed();
		this.string.innerHTML += "&nbsp;&deg;C";
		//this.details.textContent = response.weather[0].description;
		this.humidity.textContent = `Humidity:  ${response.main.humidity}`;
		this.feelsLike.textContent = `Feels like:  ${response.main.feels_like}`;
		this.feelsLike.innerHTML += `&nbsp;&deg;C`;
		this.pressure.textContent =
			`Pressure:  ${response.main.pressure}` + "  Pa";
		this.wind.textContent = `Wind :  ${response.wind.speed} + MPH`;
	}

	// Add alert for user if city not found
	noResponse(message, className) {
		// Clear remaining alerts
		this.removeAlertDiv();

		//Create div
		const div = document.createElement("div");
		div.className = className;
		//add message to the div
		div.appendChild(document.createTextNode(message));
		// Add this div to card
		const parentContainer = document.querySelector(".col-md-6");

		//Search div
		const search = document.querySelector(".w-location");
		parentContainer.insertBefore(div, search);

		// Removing the alert once we found the user
		setTimeout(() => {
			this.removeAlertDiv();
		}, 3000);
	}

	// This method will be used to remove the older alertDiv
	removeAlertDiv() {
		const currentAlert = document.querySelector(".alert");
		//If there there is any div with .alert method then we will remove that div
		if (currentAlert) {
			currentAlert.remove();
		}
	}
}
