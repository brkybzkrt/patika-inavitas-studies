const connectToDB = require('../config/db');

const gps_create = async (req,res) => {

    const {vehicle_id,device_id,latitude,longitude} = req.body;

    try {
        const text="insert into log_location (vehicle_id,device_id,latitude,longitude) values ($1,$2,$3,$4) returning *"
    
        const values =[vehicle_id,device_id,latitude,longitude];
    
        const {rows} = await connectToDB.query(text, values)
        res.status(201).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }

}

const gps_list = async (req,res) => {

try {
        const text="select * from log_location"
    
        //const values =[]
    
        const {rows} = await connectToDB.query(text)
        res.status(200).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }
}


module.exports ={gps_create,gps_list};