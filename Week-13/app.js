require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser=require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

async function cityName(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.KEY}`;

  try {
    const response = await axios.get(url);
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function cityDate(city,date) {
  const url = `https://api.weatherapi.com/v1/future.json?key=${process.env.KEYS}&q=${city}&dt=${date}`;
  // console.log(url,city,date);

  try {
    const response = await axios.get(url);
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
}


async function cityDays(city,days) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.KEYS}&q=${city}&days=${days}&aqi=no&alerts=no`;

  try {
    const response = await axios.get(url);
    const { data } = await response;
    return data;
  } catch (error) {
    console.error(error);
  }
}







app.get("/weatherAPI", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.post("/cityName", (req, res) => {
  //req.query
  cityName(req.body.cityName).then((r) => {
    const final={name:r.name,...r.main}
    res.send(final);
  });
});


app.post("/cityDate", (req, res) => {
  //req.query
  cityDate(req.body.cityName,req.body.cityDate).then((r) => {
    const final={...r.location,...r.current,...r.forecast}
    res.send(final);
  });
});


app.post("/cityDays", (req, res) => {
  //req.query
  cityDays(req.body.cityName,req.body.cityDays).then((r) => {
    const final={...r.location,...r.current,...r.forecast}
    res.send(final);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening On Port ${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/:id", (req, res) => {
//   res.send(req.params); //req.query to read query parameter of URL
// });
