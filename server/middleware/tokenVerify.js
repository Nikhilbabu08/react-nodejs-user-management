import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
    if (!token) {
        return res.status(401).json({ message: "You are not logged in!" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token!" });
        }
        req.user = decoded;
        next();
    });
};