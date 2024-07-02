import express from 'express';
import helloRoute from './api/hello.route.js';


const app = express();
app.use(express.json());
app.use('/api/hello', helloRoute);

app.use('*', function (req, res) {
   res.status(404).json({ errror: 'not found' });
});

export default app;