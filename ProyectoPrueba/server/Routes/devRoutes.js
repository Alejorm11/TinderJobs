const express = require ('express');
const router = express.Router();
const devController = require ('../Controllers/devController');

router.get('/devs', devController.getAllDevs);
router.get('/devs/:id', devController.getOneDev);
router.post('/devs', devController.createDev);
router.patch('/devs/:id', devController.updateDev);
router.delete('/devs/:id', devController.deleteDev);
router.post('/loginDev', devController.loginDev)

module.exports = router;