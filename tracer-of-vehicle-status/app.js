const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db');
const { swagServe, swagSetup } = require('./libs/swagger');

const vehicleRoute= require('./routes/vehicleRoute')
const deviceTypeRoute= require('./routes/deviceTypeRoute')
const deviceRoute= require('./routes/deviceRoute')



const app = express();

app.use(express.json());


// Routes
app.use('/vehicle',vehicleRoute)
app.use('/device',deviceRoute)
app.use('/device_type',deviceTypeRoute)
app.use('/api-docs',swagServe,swagSetup)


const port = 3099 || process.env.PORT

app.listen(port,async()=>{
    await connectToDB.connect(err=>{
        if(err) console.log(err.message)
        else console.log("Connected to DB successfully")
    })
    console.log(`Listening on port => ${port}`);
});



