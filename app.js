const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 8000
const app = express()

var corOption = {
    origin: 'http://localhost/8000'
}

//Middlewars
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Routers
const router = require('./routes/productRouter')

app.use('/api/product', router)
// app.use('api/review', router)



//Testing API
app.get('/', (req, res) => {
    res.json({ message: "Hey there its API" })
})
app.post('/api', (req, res) => {
    res.json({ message: "This is post method" })
})

app.listen(PORT, () => {
    console.log('server is running on the port 8000');
})