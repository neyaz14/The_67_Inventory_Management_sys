const {userModel} = require('../Models/userModels'); // Import User Model
const User = userModel;
const getAllUser = async () => {
    try {
        const users = await User.find();  // Fetch all users
        return users;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch users");
    }
};
const postNewUser = async (req) => {
    try {
        const {name,age,weight, createdAt}= req.body;
        const newUser = new User({name,age,weight, createdAt});
        const result = await newUser.save();
        return result;

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to psot users");
    }
};

module.exports = { getAllUser,postNewUser }; // Export the function
