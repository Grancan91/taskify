require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');


//app start config
const start = async () => {

    await app.listen(process.env.PORT || 2000, (err) => {
        if (err){
            console.log(err);
            throw err;   
        }
        console.log('Server started 3000');
    })

    //after server start
    await connectDB();

}

//Server starts
start();

//then connect to db => We can receive a instance of the sequelize with db params requering db.index

const connectDB = async () => {
    try {
        sequelize.authenticate()
                console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}

