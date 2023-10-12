const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET methods
router.get('/', indexController.renderIndex);
router.get('/all_items', indexController.getAllItems);
router.get('/get_firstLevel/:first_id', indexController.getFirstLevelItem);
router.get('/get_secondLevel/:first_id/:second_id', indexController.getSecondLevelItem);
router.get('/get_thirdLevel/:first_id/:second_id/:third_id', indexController.getThirdLevelItem);
router.get('/get_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.getFourthLevelItem);

// POST methods
router.post('/post_firstLevel', indexController.postFirstLevelItem);
router.post('/post_secondLevel', indexController.postSecondLevelItem);
router.post('/post_thirdLevel', indexController.postThirdLevelItem);
router.post('/post_fourthLevel', indexController.postFourthLevelItem);

// PUT methods
router.put('/update_firstLevel/:first_id', indexController.updateFirstLevelItem);
router.put('/update_secondLevel/:first_id/:second_id', indexController.updateSecondLevelItem);
router.put('/update_thirdLevel/:first_id/:second_id/:third_id', indexController.updateThirdLevelItem);
router.put('/update_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.updateFourthLevelItem);

// DELETE methods
router.delete('/delete_firstLevel/:first_id', indexController.deleteFirstLevelItem);
router.delete('/delete_secondLevel/:first_id/:second_id', indexController.deleteSecondLevelItem);
router.delete('/delete_thirdLevel/:first_id/:second_id/:third_id', indexController.deleteThirdLevelItem);
router.delete('/delete_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.deleteFourthLevelItem);

module.exports = router;
