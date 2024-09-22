const express = require("express");
const app = express();
const port = 8000;
const path=require('path')
var axios = require("axios").default;

// app.use('/static',express.static('static'))

app.get('/',(req,res)=>{
//   res.sendFile(path.join(__dirname+'/views/index.html'));
  const axios = require('axios');

        const options = {
          method: 'GET',
          url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
          params: {city: 'Seattle'},
          headers: {
            'X-RapidAPI-Key': '1164acafccmsh9679d384675a6c5p10d3a5jsnfaa8fc2b3fde',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
          }
        };
        axios
    .request(options)
    .then(function (response) {
       console.log(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
})

app.listen(port, () => {
  console.log(`server is listening at port :${port}: http://localhost:8000`);
});
