import express from 'express'
import homepage from './routes/home.mjs'
import aboutpage from './routes/about.mjs'

const app = express()
const port = process.env.PORT || 3000;

app.use('/',homepage)
app.use('/about',aboutpage)


app.listen(port,()=>{

    console.log(`server is up on http://localhost:${port}`)
})