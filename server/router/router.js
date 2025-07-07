const express = require('express')
const router = express.Router();

const controller = require('../controller/controller')

router.get('/',controller.index);
router.get('/contact',controller.contact);
router.get('/about_us',controller.about_us);
router.get('/sign_in',controller.sign_in);
router.get('/sign_up',controller.sign_up);
router.get('/workshop',controller.workshop);
router.post('/feeback', controller.feedback);
router.get('/placement_training',controller.placement);


module.exports = router;