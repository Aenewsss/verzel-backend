require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const secret = process.env.JWT_TOKEN

function withAuth(req, res, next) {
    const headerToken = req.headers['x-access-token'];
    
    const token = headerToken ? headerToken.replaceAll('"', '') : null;

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    } else {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) return res.status(401).json({ error: 'Unauthorized: token invalid' });

            req.username = decoded.username;
            User.findOne({ username: decoded.username })
                .then(user => {
                    req.user = user;
                    next();
                })
                .catch(err => res.status(401).json({ error: err })
                )
        })
    }
}

module.exports = withAuth