const connectToDB = require('../config/db');


const device_create = async (req,res) => {

    const {vehicle_id,device_type_id,device_name,is_online,is_active}= req.body;

    try {
        const text="insert into devices (vehicle_id,device_type_id,device_name,is_online,is_active) values ($1,$2,$3,$4,$5) returning *"
    
        const values =[vehicle_id,device_type_id,device_name,is_online,is_active]
    
        const {rows} = await connectToDB.query(text, values)
        res.status(201).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }

}
const device_list = async (req,res) => {

try {
        const text="select * from devices"
    
        //const values =[]
    
        const {rows} = await connectToDB.query(text)
        res.status(200).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }
}



const device_update = async (req,res) => {
    const {id}= req.params;
    const {vehicle_id,device_type_id,device_name,is_online,is_active}= req.body;

    try {
        const text="update devices set vehicle_id=$1, device_type_id=$2, device_name=$3, is_online=$4, is_active=$5 where id=$6 returning *";

        const values =[vehicle_id,device_type_id,device_name,is_online,is_active,id];

        const {rows} = await connectToDB.query(text, values);

        if(!rows.length){
           return res.status(404).json({message:'there are some errors'})
        }else{
            return res.status(200).json(rows)
         }
    } catch (error) {
        return res.status(400).json({message:error.message})
    }

}


const device_delete = async (req,res) => {
    const {id}= req.params;

    try {
        const text="delete from devices where id=$1 returning *";

        const values =[id];

        const {rows} = await connectToDB.query(text, values);

        if(!rows.length){
           return res.status(404).json({message:'there are some errors'})
        }else{
            return res.status(200).json(rows)
         }
    } catch (error) {
        return res.status(400).json({message:error.message})
    }

}



module.exports ={device_create, device_list, device_update, device_delete};