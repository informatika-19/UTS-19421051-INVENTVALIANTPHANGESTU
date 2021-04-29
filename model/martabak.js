const mongoose = require('mongoose')
const Schema = mongoose.Schema

const martabakSchema = new Schema({
  Nama_martabak: {
    type: String
  },
  harga: {
    type: String
  },
  pembeli: {
    type: String
  }
})
module.exports = mongoose.model('martabak', martabakSchema)