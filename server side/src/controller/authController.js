// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();
// app.use(cookieParser());

// const login = async (req, res) => {
//     try {
//         const user = req.body;

//         if (!email) {
//             return res.status(400).json({ message: "Email is required!" });
//         }

//         // check if 'role' is used in PH  ?
//         const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
//         console.log(user,'--: : --' , token)
//         res
//             .cookie('token', token, {
//                 httpOnly: true,
//             secure:false,
//             // secure: process.env.NODE_ENV === 'production',
//             // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
//             path: '/'  // Ensure cookie is removed from all paths
//             })
//             .json({ success: true, message: 'Login successful!' });

//     } catch (error) {
//         res.status(500).json({ message: "Internal Server Error", error });
//     }
// };

// const logout = (req, res) => {
//     console.log('logged out --- )')
//     res
//         .clearCookie('token', {
//             httpOnly: true,
//             secure:false,
//             // secure: process.env.NODE_ENV === 'production',
//             // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
//             path: '/'  // Ensure cookie is removed from all paths
//         })
//         .json({ success: true, message: 'Logout successful!' });
// };

// module.exports = { login, logout };
