class Weather {
	constructor(city, countryCode) {
		this.api = "https://api.openweathermap.org/data/2.5/";
		this.key = "b0395dee1e7a64a9f7ef16800ef19dab";
		this.city = city;
		this.countryCode = countryCode;
	}

	async getWeather() {
		const weather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.key}`
		);
		let response = await weather.json();
		return response;
		//this.showResult(response);
	}

	// Change location
	changeLocation(city) {
		this.city = city;
	}
}
