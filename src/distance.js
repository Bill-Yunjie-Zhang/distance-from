const distFrom = require('distance-from')
const cities = require("all-the-cities");

const chengduCord = cities.find(city => city.name === "Chengdu").loc.coordinates;
const correct_cities = cities.filter(city => distFrom(chengduCord).to(city.loc.coordinates).in('km') <= 1000)

console.log(correct_cities, correct_cities.length)