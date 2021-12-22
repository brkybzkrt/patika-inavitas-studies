const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db');
const { swagServe, swagSetup } = require('./libs/swagger');
const vehicleRoute= require('./routes/vehicleRoute')



const app = express();
app.use(express.json());



app.use('/vehicle',vehicleRoute)
app.use('/api-docs',swagServe,swagSetup)


const port =3099 || process.env.PORT

app.listen(port,async()=>{
    await connectToDB.connect(err=>{
        if(err) console.log(err.message)
        else console.log("db bağlantısı başarılı")
    })
    console.log(`listening on port => ${port}`);
});



