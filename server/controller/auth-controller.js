import express from 'express';
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
                            `INSERT INTO users (name, company, email, password_hash) VALUES (${db.escape(req.body.name)}, ${db.escape(req.body.company)}, ${db.escape(req.body.email)}, ${db.escape(hash)})`,
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

export const login = (req,res,next)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        return res.status(400).json({ errors: errorMessages });
    }

    
}
