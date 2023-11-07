import express from 'express'
import home from './routes/home.mjs'
const port = process.env.PORT || 3000;
const app = express()

app.use(express.static('public'))

app.use('/',home)

app.listen(port,()=>{
    console.log(`server up on http://localhost:${port}`)
})