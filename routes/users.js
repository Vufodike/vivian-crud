var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/create', function(req, res, next) {
  res.render('create-user', {title: 'Vivian CRUD Project'});
});

router.post('/createuser', userController.createUser );

router.post('/updateuser/:id', userController.updateUser );

router.get('/list', userController.listUsers);

router.get('/showedit/:id', userController.showEdit);

router.get('/delete/:id', userController.deleteUser);


module.exports = router;
