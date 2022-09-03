const express = require('express')
const useDitils = require('../../controller/user.controller')
const router = express.Router()
router
    .get('/random', useDitils.randomget)
    .get('/all', useDitils.allget)
    .post('/save', useDitils.userpost)
    .patch('/update', useDitils.userpatch)
    .patch('/bulk-update/:Id', useDitils.bulkpatch)
    .delete('/delete/:Id', useDitils.userdelete)
module.exports = router;