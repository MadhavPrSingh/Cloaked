import express from 'express';
import bodyParser from 'body-parser';
import { connection } from './db.js';

const PORT = 3000;

const app = express();
app.use(bodyParser.json());


//Add Routes and Middleware
app.get('/', (req, res) => {
    res.json({
        msg: "Hello World!"
    });
});



//Running Server
connection();
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});