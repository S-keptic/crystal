import express from 'express'
import home from './routes/home.mjs'
import about from './routes/about.mjs'
const app = express()
const port = process.env.PORT || 3000;


app.use('/',home)
app.use('/',about)




app.listen(port,()=>{
    console.log(`server up on http://localhost:${port}`)
})