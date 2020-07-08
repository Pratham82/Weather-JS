// setIcons(icon, iconID) {
//     const skycons = new Skycons({ color: "white" });
//     const currentIcon = icon
// }
/*

---location----
Country:sys.country
location: res.name
main: weather[0].main
icon: weather[0].icon

------Temp and other details-----------
description: weather[0].description
temp: main.temp
humidity: main.humidity
feels like: main.feels_like
pressure: main.pressure
wind: wind.deg
wind: wind.speed
*/

// // Show result
// 	showResult(res) {
// 		let icon1 = document.getElementById("w-icon");
// 		console.log(res);
// 		console.log(res.weather[0]);
// var iconcode = res.weather[0].icon;
// var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
// //$("#wicon").attr("src", iconurl);
// icon1.attr("src", iconurl);
// 	}
//let w = new Weather();
//w.getWeather();
/*
main
sys: country
weather[0]
*/

// const api = {
// 	key: "b0395dee1e7a64a9f7ef16800ef19dab",
// 	base: "https://api.openweathermap.org/data/2.5/",
// };
// const api2 = {
// 	key: "99dfe35fcb7delee",
// 	base: "http://api.wunderground.com/api",
// };
// let query = "london";
// async function getWeather() {
// 	const weather = await fetch(
// 		`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
// 	);
// 	let response = await weather.json();
// 	showResult(response);
// }

// console.log(getWeather());

// function showResult(res) {
// 	console.log(res);
// }
