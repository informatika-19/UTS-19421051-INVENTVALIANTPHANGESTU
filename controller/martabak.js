const martabakModel = require('../model/martabak')
const objectid = require('mongoose').Types.ObjectId

exports.create= (data) =>
  new Promise((resolve, reject)=> {
    martabakModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Data masuk'
      })).catch(()=> ({
        status : false,
        pesan : 'gagal menampilkan data'
      }))
  })


exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    martabakModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : 'Data diubah',
      })).catch(()=> reject ({
      status : false,
      pesan : 'gagal mengubah data',
    }))
  })

  exports.showAllData = () =>
  new Promise((resolve, reject)=>{
  martabakModel.find()
    .then (result =>{
      resolve({
        status : true,
        pesan : 'menampilkan data',
        data : result
      })
    }).catch(()=> reject ({
      status : false,
      pesan : 'gagal menampilkan data',
      data : []
    }))
  })  

exports.showbyID = (id) =>
  new Promise((resolve, reject) => {
  martabakModel.findOne({
      _id: objectid(id)
    })
    .then (result =>{
      resolve({
        status : true,
        pesan : 'menampilkan data',
        data : result
      })
    })
    .catch(()=> reject ({
      status : false,
      pesan : ' menampilkan data',
      data : null
    }))
  })


exports.delete = (id) =>
  new Promise((resolve, reject)=>{
    martabakModel.deleteOne({
      _id: objectid(id)
    }).then (() => resolve({
      status : true,
      pesan : 'menghapus data',
      })).catch(()=> reject ({
      status : false,
      pesan : 'gagal menghapus data',
      }))
  })