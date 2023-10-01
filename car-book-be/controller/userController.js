import { json } from "express";
import Customer from "../model/UserSchema.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await Customer.findOne({ email })
        if (existingUser) {
            const error = new Error("User Already Exists")
            error.code = 409
            throw error;
        }
        const newUser = new Customer({
            name, email, password
        })
        console.log('run');
        await newUser.save();
        res.status(200).json({
            message: 'Created successfully',
            body: newUser
        })
    } catch (error) {
        res.status(error.code || 400).json({
            success: false,
            message: error.message
        })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await Customer.findOne({ email });
        if (!existingUser) {
            const error = new Error("User Doesn't Exists")
            error.code = 409
            throw error;
        }

        const doesPasswordMatch = await existingUser.matchPassword(password);
        if (!doesPasswordMatch) {
            const error = new Error("Incorrect Password! Try again.")
            error.code = 401
            throw error;
        }

        res.status(200).json({
            success: true,
            data: existingUser
        })
    } catch (error) {
        res.status(error.code || 400).json({
            success: false,
            message: error.message
        })
    }
}