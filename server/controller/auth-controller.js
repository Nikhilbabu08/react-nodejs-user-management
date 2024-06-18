import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import db from '../config/dbConnection.js';

export const register = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        return res.status(400).json({ errors: errorMessages });
    }

    db.query(
        `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(req.body.email)});`,
        (err, result) => {
            if (err) {
                return res.status(500).json({ msg: err });
            }
            if (result.length) {
                return res.status(409).json({
                    msg: 'This email is already in use!',
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({ msg: err });
                    } else {
                        db.query(
                            `INSERT INTO users (name, company, email, password) VALUES (${db.escape(req.body.name)}, ${db.escape(req.body.company)}, ${db.escape(req.body.email)}, ${db.escape(hash)})`,
                            (err, result) => {
                                if (err) {
                                    return res.status(400).json({ msg: err });
                                }
                                return res.status(201).json({
                                    msg: 'The user has been registered with us!',
                                });
                            }
                        );
                    }
                });
            }
        }
    );
};

export const login = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        return res.status(400).json({ errors: errorMessages });
    }

    db.query(
        `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
        (err, result) => {
            if (err) {
                return res.status(500).json({ msg: err });
            }
            if (!result.length) {
                return res.status(401).json({
                    msg: 'Email or password is incorrect!'
                });
            }
            bcrypt.compare(req.body.password, result[0].password,
                (bErr, bResult) => {
                    if (bErr) {
                        return res.status(401).json({
                            msg: 'Email or password is incorrect!'
                        });
                    }
                    if (bResult) {
                        const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                        db.query(
                            `UPDATE users SET id = now() WHERE id = '${result[0].id}'`
                        );
                        return res.status(200).json({
                            msg: 'Logged in!',
                            token,
                            user: result[0]
                        });
                    }
                    return res.status(401).json({
                        msg: 'Username or password is incorrect!'
                    });
                }
            );
        }
    );

}
