import express from 'express'
const app =express()
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
import todoRoutes from './src/Routes/todoRoutes.js'

dotenv.config()
app.use(express.json());

connectDB();

app.use('/api',todoRoutes)

const PORT = process.env.PORT


app.get('/',(req,res)=>{
    res.send('harsh')
})



app.listen(PORT,()=>{
    console.log(`server chalu hai ${PORT} is port par`)
})