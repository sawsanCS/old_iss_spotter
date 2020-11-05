const { nextISSTimesForMyLocation } = require('./iss');
//this is a callback to check if the request is returning a valid output or an error
/*fetchMyIP((error, ip) => {
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
});*/

nextISSTimesForMyLocation((err, passes) => {
  if (error) {
    console.log("something went wrong", err);
  }
  for (const pass of passes){
    console.log(`Next pass at ${pass.risetime} for ${pass.duration}`);
  }
 
});