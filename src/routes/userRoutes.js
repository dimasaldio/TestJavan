const express = require('express')
const router = express.Router()
const {checkFamily, checkAset, addFamily, updateFamily, 
    deleteFamily, addAset, updateAset, deleteAset, updateValues} = require('../controllers/userController')

router.post('/family/add', addFamily)
router.put('/family/:familyName', checkFamily, updateFamily)
router.delete('/family/delete/:familyName', checkFamily, deleteFamily)

router.post('/aset/add/:familyName', checkFamily, addAset, updateValues)
router.put('/aset/:familyName/:asetID', checkFamily, checkAset, updateAset, updateValues)
router.delete('/aset/delete/:familyName/:asetID', checkFamily, checkAset, deleteAset, updateValues)

module.exports = router