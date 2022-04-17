const express = require('express')
const router = express.Router();
const {register,hello} = require('../Controllers/Tasks')
router.route('/user').post(register);
// router.post('/login');
router.route('/hello').get(hello);
module.exports = router;