class Storage {
	constructor() {
		this.city;

		this.defaultCity = "Mumbai";
	}

	getLocationData() {
		if (localStorage.getItem("city") === null) {
			this.city = this.defaultCity;
		} else {
			this.city = localStorage.getItem("city");
		}

		return {
			city: this.city,
		};
	}

	setLocationData(city) {
		// We don't have to use JSON.stringify because we are going to use strings only so need for conversions
		localStorage.setItem("city", city);
		//localStorage.setItem("countryCode", countryCode);
	}
}
