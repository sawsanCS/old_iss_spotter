/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
let request = require('request');
/*const myJson =
  {
    "status": "success",
    "data": {
      "ipv4": "8.8.8.8",
      "continent_name": "North America",
      "country_name": "United States",
      "subdivision_1_name": "California",
      "subdivision_2_name": null,
      "city_name": "Mountain View",
      "latitude": "37.38600",
      "longitude": "-122.08380"
    }
  };
*/
const nextISSTimesForMyLocation = function (callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      console.log("It didn't work!" , error);
    }
    console.log('It worked! Returned IP:' , ip);
  });
  fetchCoordsByIP('72.141.69.246', (err, coordinates) =>{
    if (err) {
      console.log("It didn't work!" , err);
    } else {
      console.log('Here are the longitude and the latitude:' , coordinates);
    }
    //console.log('Here are the longitude and the latitude:' , )
  });
  fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' },(err, coords) => {
    if (err) {
      console.log('no such values for these coordinates', err);
    } else {
      console.log('the information that should be returned from response are:' , coords);
    }
  });
}
const fetchMyIP = function(callback) {
  
  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (error) {
      console.log(error);
      callback(error, null);
      console.log(body);
    } else {
      const data = JSON.parse(body);
      callback(null, data['ip']);
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  });
};
//const ip = fetchMyIP;
const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.ipgeolocationapi.com/geolocate/${ip}`,(error, response, body) => {
    if (error) {
      console.log(error);
      callback(error, null);
      console.log(body);
    } else {
      const {latitude , longitude} = JSON.parse(body).geo;
      const objIp = { latitude, longitude};
     
      callback(null, objIp);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      
    }
  });
};
/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-now.json/?latitude=${coords['latitude']}&longitude=${coords['latitude']}`,(error, response, body) => {
    if (error) {
      console.log(error);
      callback(error, null);
      console.log(body);
    } else {
      const resp = JSON.parse(body);
      console.log(resp);
      callback(null, resp);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  });
}
module.exports = {fetchMyIP, nextISSTimesForMyLocation};
