const mine = {     
  "status": "success",     
  "data": {         
    "ipv4": "8.8.8.8",         
    "continent_name": "North America",         
    "country_name": "United States",         "subdivision_1_name": "California",         
    "subdivision_2_name": null,         "city_name": "Mountain View",         
    "latitude": "37.38600",         "longitude": "-122.08380"     } }; 
    console.log(mine);
    
 const {latitude, longitude} = mine.data;
  console.log(latitude, longitude);