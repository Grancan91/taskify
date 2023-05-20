const User = require('../models/user');
const { Op } = require('sequelize');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        console.log(name, email, password);
    } catch (error) {
        
    }
}