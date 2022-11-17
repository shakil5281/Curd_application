const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')
const userDataController = require('../controller/userDataController')
const crudController = require('../controller/crudController')
const AuthVeryfy = require('../middleware/Authvery')


// router setup
// get Router
router.get('/', AuthVeryfy, userDataController.home)

// crud
// Curd Router 
router.get('/read',AuthVeryfy, crudController.Readdata)
router.post('/create',AuthVeryfy, crudController.Create)

router.post('/update/:id', crudController.Updatedata)
router.get('/delete/:id', crudController.Deletadata)

// active status
router.get('/crud/status',AuthVeryfy, crudController.status)





// User



// Post Router 
router.post('/signup', userController.register)
router.post('/signin', userController.login)
router.post('/update',AuthVeryfy, userController.passwordUpdate)
router.post('/profile',AuthVeryfy, userController.profileupdate)






module.exports = router;