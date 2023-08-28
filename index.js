import express from 'express'
import cors from 'cors'

import router from './routers/productRouter.js'

const app = express()
const PORT = process.env.PORT || 8080

var corsConfig = {
    origin: 'https://localhost:8081'
}

app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products/',router)

app.get('/', (req,res)=> {
    res.json({ message: 'Hello'})
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})