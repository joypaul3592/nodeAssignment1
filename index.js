const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./router/v1/user.router');


app.use(cors())
app.use(express.json())

app.use('/user', router)



app.all('*', (req, res) => {
    res.send('Any Router show ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})