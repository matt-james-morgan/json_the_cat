const request = require("request");


const fetchBreedDescription = (breed, callback) =>{

  //uses request library to retrieve json from link
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body)=>{

    
    const data = JSON.parse(body);
    

    if (data[0] === undefined) {
      callback(error, null);

    } else {

      callback(error, data[0].description);
    }
    

  });
};

module.exports = {fetchBreedDescription};

