import db from '../config/dbConnection.js';

export const userProfile = (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    db.query(`SELECT * FROM users WHERE id = ${userId}`,
        (err, result) => {
            if (err) {
                return res.status(500).json({ msg: err });
            }
            if (result.length > 0) {
                return res.status(200).json(result[0]);
            }
            else {
                return res.status(404).json({ msg: "User not found" });
            }
        })
}

export const getusers = (req, res, next) => {
    db.query(`SELECT * FROM users`, (err, result) => {
        if (err) {
            return res.status(500).json({ msg: err });
        }
        if (result.length > 0) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ msg: "No users found" });
        }
    });
};