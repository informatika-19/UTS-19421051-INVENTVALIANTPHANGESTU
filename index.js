const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose= require ('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then (() => {
    console.log('Tersambung')
}).catch((e)=>{
    console.log(e)
    console.log('Tidak Tersambung')
})
app.use(bodyParser.json({
    extend: true,
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extend: true,
    limit: '20mb'
}))
app.get('/', (req, res)=>{
    res.send('Selamat Manikmati Martabak Kami')

})

app.use('/martabak/', require('./routes/martabak'))

app.listen(4000, () => {
    console.log('Server Berjalan')
})