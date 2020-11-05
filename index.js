const { fetchMyIP, fetchCoordsByIP } = require('./iss');

//this is a callback to check if the request is returning a valid output or an error
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
  }

  console.log('It worked! Returned IP:' , ip);
});
fetchCoordsByIP('72.141.69.246', (err, coordinates) =>{
  if (err) {
    console.log("It didn't work!" , err);
  }
  else {
    console.log('Here are the longitude and the latitude:' , coordinates)
  }
  //console.log('Here are the longitude and the latitude:' , )
});
