const Router  = require('express');
const contr = require('../controllers/controller');
const router = Router();


router.post('/home',contr.Hello_Home);

module.exports = router;