'use strict'

const express = require('express')
const router = express.Router()
const crudOperations = require('./controller/crudOperations')
const fileStatastics = require('./controller/fileStatastics')

router.get('/readFile', crudOperations.readMe);        // /readFile/{filePath}
router.post('/writeFile',crudOperations.writeInMe);    // /writeFile
router.put('/updateFile', crudOperations.updateMe);    // /updateFile/{filePath}
router.delete('/deleteFile', crudOperations.deleteMe); // /deleteFile/{filePath}
router.put('/renameFile', crudOperations.renameMe);   //  /renameFile/{filePath}
router.get('/readFileLineByLine', fileStatastics.readFileLineByLine);
router.get('/fileStatistics', fileStatastics.fileStat);

module.exports = router;
