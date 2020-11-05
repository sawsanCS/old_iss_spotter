const { fetchMyIP } = require('./iss');
//this is a callback to check if the request is returning a valid output or an error
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
