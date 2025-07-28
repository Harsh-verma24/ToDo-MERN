import express from 'express'
const app =express()
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
import todoRoutes from './src/Routes/todoRoutes.js'
import cors from 'cors'
dotenv.config()
app.use(express.json());


connectDB();
app.use(cors({
  origin: "https://todo-mern-w1p7.onrender.com",
}))

app.use('/api',todoRoutes)

const PORT = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send('harsh ka backend')
})



app.listen(PORT,()=>{
    console.log(`server chalu hai ${PORT} is port par`)
})