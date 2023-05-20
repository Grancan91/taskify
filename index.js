require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const User = require('./api/models/user'); // after require models, sequelize create it on sync


const router = require('./api/routes');

//1 app start config
const start = async () => {

    //5. This needed to convert req.body json to object
    app.use(express.json());
    //6. Create Routes and add to express before start server
    app.use("/api", router);

    await app.listen(process.env.PORT || 2000, (err) => {
        if (err){
            console.log(err);
            throw err;   
        }
        console.log('Server started 3000');
    })

    //after server start
    await connectDB();
    //await syncDB();

}

// 2 Server starts
start();

//3 then connect to db => We can receive a instance of the sequelize with db params requering db.index

const connectDB = async () => {
    try {
        sequelize.authenticate()
                console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}

//4 After model is created, we can sync to create tables
const syncDB = async () => {
    try {
        await sequelize.sync({alter: "true"});
        console.log('DB Synced');
    } catch (error) {
        console.log(error);
    }
}

