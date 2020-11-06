const {nextISSTimesForMyLocation } = require('./iss_promised');
nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const pass of passTimes){
      console.log(`Next pass at ${pass.risetime} for ${pass.duration}`); }
    })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });