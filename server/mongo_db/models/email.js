import mongoose from "mongoose";

const Email = new mongoose.Schema({
    email: { type: String, required: true },
    date: { type: String, required: true },
});

const EmailSchema = mongoose.model('Email', Email);

export default EmailSchema;
