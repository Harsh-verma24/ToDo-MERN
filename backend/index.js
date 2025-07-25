import express from 'express'
const app =express()
import dotenv from 'dotenv'

dotenv.config()


const PORT = process.env.PORT


app.get('/',(req,res)=>{
    res.send('harsh')
})



app.listen(PORT,()=>{
    console.log(`server chalu hai ${PORT} is port par`)
})