import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
mongoose.connect(process.env.Mongo).then(()=>{
    console.log("Connected to MongoDB!..");
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
});
const app=express()
app.use(express.json())
app.listen(3000, ()=>{
    console.log('Server is running on port 3000 !!');
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
