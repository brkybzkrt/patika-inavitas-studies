const connectToDB = require('../config/db');


const vehicle_create = async (req,res) => {

    const {vehicle_plate,current_status,is_active}= req.body;

    try {
        const text="insert into vehicles (vehicle_plate,current_status,is_active) values ($1,$2,$3) returning *"
    
        const values =[vehicle_plate,current_status,is_active] // buradaki parametre sıralaması önemli örneğin => vehicle_plate=$1 ve current_status=$2 gibi
    
        const {rows} = await connectToDB.query(text, values)
        res.status(201).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }

}
const vehicle_list = async (req,res) => {

try {
        const text="select id, vehicle_plate, current_status, is_active from vehicles"
    
        //const values =[] // herhangi bir kritere göre listeleme yapacaksak onu values dizisi içinde göndermemiz gerekiyor
    
        const {rows} = await connectToDB.query(text)
        res.status(200).json(rows)
        
    } catch (error) {
        
        return res.status(400).send({message:error.message});
    }
}



const vehicle_update = async (req,res) => {
    const {id}= req.params;
    const {vehicle_plate,current_status,is_active}= req.body;

    try {
        const text="update vehicles set vehicle_plate=$1, current_status=$2, is_active=$3 where id=$4 returning *";

        const values =[vehicle_plate,current_status,is_active,id];

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


const vehicle_delete = async (req,res) => {
    const {id}= req.params;

    try {
        const text="delete from vehicles where id=$1 returning *";

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



module.exports ={vehicle_create, vehicle_list, vehicle_update, vehicle_delete};