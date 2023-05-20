const User = require('../models/user');
const { Op } = require('sequelize');

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({ name, email, password });
        res.status(200).json({ message: `User ${name} created successfully` });
    } catch (error) {
        
    }
}

module.exports = {
    signUp,
}