const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to fetch weather forecast data
router.get('/forecast', async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,showers,snowfall`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    res.status(200).json(weatherData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;