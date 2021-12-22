const pg= require('pg');

const connectToDB=new pg.Pool({
    connectionString: process.env.DB_CONNECTION_STRING 
 })

module.exports= connectToDB;