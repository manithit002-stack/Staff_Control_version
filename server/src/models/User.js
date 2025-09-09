import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

// Defince user Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: ['amin', 'manager', 'staff'],
        default: 'staff',
    },
    name:{
        type: String,
        required:true
    },
}, {timestamps:true})

// Pre-save hook to hash password before saving
userSchema.pre('save', async function (next) {
    if(!this.isModified('password'))
        return next;
})