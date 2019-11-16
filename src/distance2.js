/**
 * THINKING PROCESS:
 * 1. Import Data & method
 * 2. Find the current coordinates
 * 3. Use filter now
 * 4. Get all the coordinates and use the method imported to calculate the distance
 * 5. Compare the distance with the max distance
 */
//////////////////Import//////////////////
const cities = require('all-the-cities'); //import the city data
const distFrom = require('distance-from'); //import the method

//////////////////Find the current coordinates//////////////////
const currentCoord = cities.find(city => city.name = ("Chengdu")).loc.coordinates

//////////////////filter & compare the distance//////////////////
var correctCities = cities.filter(city => distFrom(currentCoord).to(city.loc.coordinates).in('km') < 1000)

///////////////////////////////////////////////////////////////////////////////////
console.log(correctCities, correctCities.length)