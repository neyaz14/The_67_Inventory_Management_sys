const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access! No token provided.' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token. Please login again!' });
        }
        console.log(req, decoded)
        req.user = decoded; // Store user data in req
        next();
    });
};

module.exports = verifyToken;
