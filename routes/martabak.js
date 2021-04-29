const router = require('express').Router()
const martabakController = require('../controller/martabak')

router.post('/penjualan', (req, res)=> {
    martabakController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/data', (req, res)=> {
    martabakController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/detail/:id', (req, res)=> {
    martabakController.showbyID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.put('/ubah/:id', (req, res)=> {
    martabakController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.delete('/hapus/:id', (req, res)=> {
    martabakController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  module.exports = router