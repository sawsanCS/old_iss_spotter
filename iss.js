/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
let request = require('request');
const myJson =
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
      const {latitude , longitude}= JSON.parse(body).geo;
      const objIp = { latitude, longitude};
      callback(null, objIp);
    }
    /*if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }*/
  });

};
module.exports = { fetchMyIP, fetchCoordsByIP };
