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
  origin: 'http://localhost:5173',  // Vite default port
//   credentials: true,                // if you're using cookies
}))

app.use('/api',todoRoutes)

const PORT = process.env.PORT


app.get('/',(req,res)=>{
    res.send('harsh ka backend')
})



app.listen(PORT,()=>{
    console.log(`server chalu hai ${PORT} is port par`)
})