import express from 'express';
import cors from 'cors';
import helloRoute from './api/hello.route.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/hello', helloRoute);

app.use('*', function (req, res) {
   res.json({
      message: "add this to your url - /api/hello?visitor_name=Birusha"
   });
});

export default app;