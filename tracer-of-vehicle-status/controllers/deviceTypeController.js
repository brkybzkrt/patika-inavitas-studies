const connectToDB = require('../config/db');


const type_create = async (req,res) => {

    const {device_name,device_description,is_active}= req.body;

    try {
        const text="insert into device_types (device_name,device_description,is_active) values ($1,$2,$3) returning *"
    
        const values =[device_name,device_description,is_active]
    
        const {rows} = await connectToDB.query(text, values)
        res.status(201).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }

}

const type_list = async (req,res) => {

try {
        const text="select * from device_types"
    
        //const values =[]
    
        const {rows} = await connectToDB.query(text)
        res.status(200).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }
}

const type_delete = async (req,res) => {
    const {id}= req.params;

    try {
        const text="delete from device_types where id=$1 returning *";

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



module.exports ={type_create, type_delete, type_list};