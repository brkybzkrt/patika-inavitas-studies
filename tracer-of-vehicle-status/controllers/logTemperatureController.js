const connectToDB = require('../config/db');

const temp_create = async (req,res) => {

    const {vehicle_id,device_id,read_data}= req.body;

    try {
        const text="insert into log_temperature (vehicle_id,device_id,read_data) values ($1,$2,$3) returning *"
    
        const values =[vehicle_id,device_id,read_data]
    
        const {rows} = await connectToDB.query(text, values)
        res.status(201).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }

}

const temp_list = async (req,res) => {

try {
        const text="select id, vehicle_id, device_id, read_data, created_at  from log_temperature"
    
        //const values =[]
    
        const {rows} = await connectToDB.query(text)
        res.status(200).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }
}


module.exports ={temp_create,temp_list};