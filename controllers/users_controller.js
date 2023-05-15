const users_model = require('../models/users_models');

const Users = users_model;

const Controllers = {
    // REGISTER THE USER
    SignUp: async (x) => {
        let alreadyExist = await Users.findOne({ email: x.email });
        if (alreadyExist) return { message: "This email is already registered.", messageType: "error" };

        // CREATE NEW USER
        let response = await Users.create({
            firstName: x.firstName,
            lastName: x.lastName,
            email: x.email,
            password: x.password
        }).then((user) => {
            return user ? { message: "Registerd successfully.", messageType: "success" } : { message: "Couldn't register the user.", messageType: "error" };
        }).catch((error) => {
            return error;
        });
        return response;
    },
    // Get User
    SignIn: async (x) => {
        // let getData = await Users.findOne({ email: x.email, password: x.password });
        let getData = await Users.find();
        if (getData) return { message: "Get Data Successfully.", messageType: "success", users: getData };
        if (!getData) return { message: "User not found", messageType: "error" };
    }
}

module.exports = Controllers;