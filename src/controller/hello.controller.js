import axios from 'axios';
import dotenv from 'dotenv';


// hello api

dotenv.config();

export async function hello(req, res) {
   try {
      const visitorName = req.query.visitor_name;
      const clientIp =
         req.headers["cf-connecting-ip"] ||
         req.headers["x-real-ip"] ||
         req.headers["x-forwarded-for"] ||
         req.socket.remoteAddress ||
         "";

      const response = await axios.get(`http://ip-api.com/json/${clientIp}`);
      const { city } = response.data || "new york";
      const API_KEY = process.env.OPEN_WEATHER_API_KEY;
      const weatherResponse = await axios.get(
         `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const temperature = weatherResponse.data.main.temp;
      res.status().json({
         client_ip: clientIp,
         location: city,
         greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city}`,
      });
   } catch (error) {
      res.json({ error: error.message });
   }
}