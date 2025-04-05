require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');


const connectDB = require('./connectdb');
const userRoutre = require('./routes/routes');
const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRouter')
const supplierRouter = require('./routes/supplierRoutes')
const supplierOrdersRoute = require('./routes/supplierOrdersRoute')
// ! -----
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// ! -------------------




const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cors({
    origin: [
        'http://localhost:5173',

    ],
    credentials: true
}));


connectDB();


// ! -----------------------------

app.use(cookieParser());

// const verifyToken = (req, res, next) => {
//     const token = req.cookies?.token;

//     if (!token) {
//         return res.status(401).send({ message: 'unauthorized access' });
//     }

//     // verify the token
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(401).send({ message: 'unauthorized access' });
//         }
//         console.log(req,  req.user , decoded)
//         req.user = decoded;

//         next();
//     })
// }

app.post('/jwt', (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
    // console.log(user,'--: : --' )

    res
        .cookie('token', token, {
            httpOnly: true,
            secure: false,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'  // Ensure cookie is removed from all paths
        })
        .send({ success: true })

});

app.post('/logout', (req, res) => {
    // console.log('loggedout ---!! ')
    res
        .clearCookie('token', {
            httpOnly: true,
            secure: false,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'  // Ensure cookie is removed from all paths
        })
        .send({ message: 'cookie cleared' })
})





// ! -------- Router   -----------

// app.use('/',userRoutre)

// ? ---- Product api

app.use('/product', productRouter)

app.use('/supplier', supplierRouter)
app.use('/supplierOrder', supplierOrdersRoute)
















app.get('/', (req, res) => {
    res.send('Our server is ready -------- ......... ')
})

app.listen(port, () => {
    console.log(`server is sitting on port ${port}`);
})
