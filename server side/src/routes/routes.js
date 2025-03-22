const express = require('express')

const router = express.Router();
// const userModel = require('../Models/userModels')
// const
const { getAllUser,postNewUser } = require('../controller/userController');





router.get('/users', async(req, res)=>{
    try{
        // const users =await User.find();
       const users =await getAllUser();
        res.send(users)
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:'error'})
    }
})


// post

router.post('/users', async(req, res)=>{

    try{
        const newUser = await postNewUser(req);
        console.log(newUser);

        res.send(newUser)

    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:'error'})
    }
})




// CRUD Operations









module.exports = router;
