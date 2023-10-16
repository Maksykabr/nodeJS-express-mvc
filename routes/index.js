const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET methods
router.get('/', indexController.renderIndex);


/**
 * @swagger
 * /all_items:
 *   get:
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: All items successfully retrieved
 */
router.get('/all_items', indexController.getAllItems);

/**
 * @swagger
 * /get_firstLevel/{first_id}:
 *   get:
 *     summary: Get a first level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: First level item successfully retrieved
 */
router.get('/get_firstLevel/:first_id', indexController.getFirstLevelItem);

/**
 * @swagger
 * /get_secondLevel/{first_id}/{second_id}:
 *   get:
 *     summary: Get a second level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *     responses:
 *       200:
 *         description: Second level item successfully retrieved
 */
router.get('/get_secondLevel/:first_id/:second_id', indexController.getSecondLevelItem);


/**
 * @swagger
 * /get_thirdLevel/{first_id}/{second_id}/{third_id}:
 *   get:
 *     summary: Get a third level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *       - in: path
 *         name: third_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *     responses:
 *       200:
 *         description: Third level item successfully retrieved
 */
router.get('/get_thirdLevel/:first_id/:second_id/:third_id', indexController.getThirdLevelItem);

/**
 * @swagger
 * /get_fourthLevel/{first_id}/{second_id}/{third_id}/{fourth_id}:
 *   get:
 *     summary: Get a fourth level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *       - in: path
 *         name: third_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *       - in: path
 *         name: fourth_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *     responses:
 *       200:
 *         description: Fourth level item successfully retrieved
 */
router.get('/get_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.getFourthLevelItem);

// POST methods

/**
 * @swagger
 * /post_firstLevel:
 *   post:
 *     summary: Create a new first level item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Перший рівень:
 *                 type: string
 *                 description: First level identifier
 *               Другий рівень:
 *                 type: string
 *                 description: Second level identifier
 *               Третій рівень:
 *                 type: string
 *                 description: Third level identifier
 *               Четвертий рівень:
 *                 type: string
 *                 description: Fourth level identifier
 *               Категорія:
 *                 type: string
 *                 description: Category
 *               Назва об'єкта українською мовою:
 *                 type: string
 *                 description: Name of the object in Ukrainian language
 *     responses:
 *         '200':
 *           description: Third level item successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   Перший рівень:
 *                     type: string
 *                     description: First level identifier
 *                   Другий рівень:
 *                     type: string
 *                     description: Second level identifier
 *                   Третій рівень:
 *                     type: string
 *                     description: Third level identifier
 *                   Четвертий рівень:
 *                     type: string
 *                     description: Fourth level identifier
 *                   Категорія:
 *                     type: string
 *                     description: Category
 *                   Назва об'єкта українською мовою:
 *                     type: string
 *                     description: Name of the object in Ukrainian language
 */
router.post('/post_firstLevel', indexController.postFirstLevelItem);


/**
 * @swagger
 * /post_secondLevel:
 *   post:
 *     summary: Create a new second level item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Перший рівень:
 *                 type: string
 *                 description: First level identifier
 *               Другий рівень:
 *                 type: string
 *                 description: Second level identifier
 *               Третій рівень:
 *                 type: string
 *                 description: Third level identifier
 *               Четвертий рівень:
 *                 type: string
 *                 description: Fourth level identifier
 *               Категорія:
 *                 type: string
 *                 description: Category
 *               Назва об'єкта українською мовою:
 *                 type: string
 *                 description: Name of the object in Ukrainian language
 *     responses:
 *         '200':
 *           description: Third level item successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   Перший рівень:
 *                     type: string
 *                     description: First level identifier
 *                   Другий рівень:
 *                     type: string
 *                     description: Second level identifier
 *                   Третій рівень:
 *                     type: string
 *                     description: Third level identifier
 *                   Четвертий рівень:
 *                     type: string
 *                     description: Fourth level identifier
 *                   Категорія:
 *                     type: string
 *                     description: Category
 *                   Назва об'єкта українською мовою:
 *                     type: string
 *                     description: Name of the object in Ukrainian language
 */
router.post('/post_secondLevel', indexController.postSecondLevelItem);

/**
 * @swagger
 * /post_thirdLevel:
 *   post:
 *     summary: Create a new third level item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Перший рівень:
 *                 type: string
 *                 description: First level identifier
 *               Другий рівень:
 *                 type: string
 *                 description: Second level identifier
 *               Третій рівень:
 *                 type: string
 *                 description: Third level identifier
 *               Четвертий рівень:
 *                 type: string
 *                 description: Fourth level identifier
 *               Категорія:
 *                 type: string
 *                 description: Category
 *               Назва об'єкта українською мовою:
 *                 type: string
 *                 description: Name of the object in Ukrainian language
 *     responses:
 *         '200':
 *           description: Third level item successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   Перший рівень:
 *                     type: string
 *                     description: First level identifier
 *                   Другий рівень:
 *                     type: string
 *                     description: Second level identifier
 *                   Третій рівень:
 *                     type: string
 *                     description: Third level identifier
 *                   Четвертий рівень:
 *                     type: string
 *                     description: Fourth level identifier
 *                   Категорія:
 *                     type: string
 *                     description: Category
 *                   Назва об'єкта українською мовою:
 *                     type: string
 *                     description: Name of the object in Ukrainian language
 */
router.post('/post_thirdLevel', indexController.postThirdLevelItem);

/**
 * @swagger
 * /post_fourthLevel:
 *   post:
 *     summary: Create a new fourth level item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Перший рівень:
 *                 type: string
 *                 description: First level identifier
 *               Другий рівень:
 *                 type: string
 *                 description: Second level identifier
 *               Третій рівень:
 *                 type: string
 *                 description: Third level identifier
 *               Четвертий рівень:
 *                 type: string
 *                 description: Fourth level identifier
 *               Категорія:
 *                 type: string
 *                 description: Category
 *               Назва об'єкта українською мовою:
 *                 type: string
 *                 description: Name of the object in Ukrainian language
 *     responses:
 *         '200':
 *           description: Third level item successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   Перший рівень:
 *                     type: string
 *                     description: First level identifier
 *                   Другий рівень:
 *                     type: string
 *                     description: Second level identifier
 *                   Третій рівень:
 *                     type: string
 *                     description: Third level identifier
 *                   Четвертий рівень:
 *                     type: string
 *                     description: Fourth level identifier
 *                   Категорія:
 *                     type: string
 *                     description: Category
 *                   Назва об'єкта українською мовою:
 *                     type: string
 *                     description: Name of the object in Ukrainian language
 */
router.post('/post_fourthLevel', indexController.postFourthLevelItem);

// PUT methods

/**
 * @swagger
 * /update_firstLevel/{first_id}:
 *   put:
 *     summary: Update a first level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Перший рівень:
 *                 type: string
 *                 description: First level identifier
 *               Другий рівень:
 *                 type: string
 *                 description: Second level identifier
 *               Третій рівень:
 *                 type: string
 *                 description: Third level identifier
 *               Четвертий рівень:
 *                 type: string
 *                 description: Fourth level identifier
 *               Категорія:
 *                 type: string
 *                 description: Category
 *               Назва об'єкта українською мовою:
 *                 type: string
 *                 description: Name of the object in Ukrainian language
 *     responses:
 *         '200':
 *           description: Third level item successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   Перший рівень:
 *                     type: string
 *                     description: First level identifier
 *                   Другий рівень:
 *                     type: string
 *                     description: Second level identifier
 *                   Третій рівень:
 *                     type: string
 *                     description: Third level identifier
 *                   Четвертий рівень:
 *                     type: string
 *                     description: Fourth level identifier
 *                   Категорія:
 *                     type: string
 *                     description: Category
 *                   Назва об'єкта українською мовою:
 *                     type: string
 *                     description: Name of the object in Ukrainian language
 */
router.put('/update_firstLevel/:first_id', indexController.updateFirstLevelItem);

/**
 * @swagger
 * /update_secondLevel/{first_id}/{second_id}:
 *   put:
 *     summary: Update a second level item by ID
 *     parameters:
 *       parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Перший рівень:
 *                 type: string
 *                 description: First level identifier
 *               Другий рівень:
 *                 type: string
 *                 description: Second level identifier
 *               Третій рівень:
 *                 type: string
 *                 description: Third level identifier
 *               Четвертий рівень:
 *                 type: string
 *                 description: Fourth level identifier
 *               Категорія:
 *                 type: string
 *                 description: Category
 *               Назва об'єкта українською мовою:
 *                 type: string
 *                 description: Name of the object in Ukrainian language
 *     responses:
 *         '200':
 *           description: Third level item successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   Перший рівень:
 *                     type: string
 *                     description: First level identifier
 *                   Другий рівень:
 *                     type: string
 *                     description: Second level identifier
 *                   Третій рівень:
 *                     type: string
 *                     description: Third level identifier
 *                   Четвертий рівень:
 *                     type: string
 *                     description: Fourth level identifier
 *                   Категорія:
 *                     type: string
 *                     description: Category
 *                   Назва об'єкта українською мовою:
 *                     type: string
 *                     description: Name of the object in Ukrainian language
 */
router.put('/update_secondLevel/:first_id/:second_id', indexController.updateSecondLevelItem);

/**
 * @swagger
 * /update_thirdLevel/{first_id}/{second_id}/{third_id}:
 *   put:
 *     summary: Update a third level item by ID
 *     parameters:
 *       parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *       - in: path
 *         name: third_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Перший рівень:
 *                 type: string
 *                 description: First level identifier
 *               Другий рівень:
 *                 type: string
 *                 description: Second level identifier
 *               Третій рівень:
 *                 type: string
 *                 description: Third level identifier
 *               Четвертий рівень:
 *                 type: string
 *                 description: Fourth level identifier
 *               Категорія:
 *                 type: string
 *                 description: Category
 *               Назва об'єкта українською мовою:
 *                 type: string
 *                 description: Name of the object in Ukrainian language
 *     responses:
 *         '200':
 *           description: Third level item successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   Перший рівень:
 *                     type: string
 *                     description: First level identifier
 *                   Другий рівень:
 *                     type: string
 *                     description: Second level identifier
 *                   Третій рівень:
 *                     type: string
 *                     description: Third level identifier
 *                   Четвертий рівень:
 *                     type: string
 *                     description: Fourth level identifier
 *                   Категорія:
 *                     type: string
 *                     description: Category
 *                   Назва об'єкта українською мовою:
 *                     type: string
 *                     description: Name of the object in Ukrainian language
 */
router.put('/update_thirdLevel/:first_id/:second_id/:third_id', indexController.updateThirdLevelItem);

/**
 * @swagger
 * /update_fourthLevel/{first_id}/{second_id}/{third_id}/{fourth_id}:
 *   put:
 *     summary: Update a fourth level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *       - in: path
 *         name: third_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *       - in: path
 *         name: fourth_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Перший рівень:
 *                 type: string
 *                 description: First level identifier
 *               Другий рівень:
 *                 type: string
 *                 description: Second level identifier
 *               Третій рівень:
 *                 type: string
 *                 description: Third level identifier
 *               Четвертий рівень:
 *                 type: string
 *                 description: Fourth level identifier
 *               Категорія:
 *                 type: string
 *                 description: Category
 *               Назва об'єкта українською мовою:
 *                 type: string
 *                 description: Name of the object in Ukrainian language
 *     responses:
 *         '200':
 *           description: Third level item successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   Перший рівень:
 *                     type: string
 *                     description: First level identifier
 *                   Другий рівень:
 *                     type: string
 *                     description: Second level identifier
 *                   Третій рівень:
 *                     type: string
 *                     description: Third level identifier
 *                   Четвертий рівень:
 *                     type: string
 *                     description: Fourth level identifier
 *                   Категорія:
 *                     type: string
 *                     description: Category
 *                   Назва об'єкта українською мовою:
 *                     type: string
 *                     description: Name of the object in Ukrainian language
 */
router.put('/update_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.updateFourthLevelItem);

// DELETE methods

/**
 * @swagger
 * /delete_firstLevel/{first_id}:
 *   delete:
 *     summary: Delete a first level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: First level item successfully deleted
 */
router.delete('/delete_firstLevel/:first_id', indexController.deleteFirstLevelItem);

/**
 * @swagger
 * /delete_secondLevel/{first_id}/{second_id}:
 *   delete:
 *     summary: Delete a second level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *     responses:
 *       200:
 *         description: Second level item successfully deleted
 */
router.delete('/delete_secondLevel/:first_id/:second_id', indexController.deleteSecondLevelItem);

/**
 * @swagger
 * /delete_thirdLevel/{first_id}/{second_id}/{third_id}:
 *   delete:
 *     summary: Delete a third level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *       - in: path
 *         name: third_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *     responses:
 *       200:
 *         description: Third level item successfully deleted
 */
router.delete('/delete_thirdLevel/:first_id/:second_id/:third_id', indexController.deleteThirdLevelItem);

/**
 * @swagger
 * /delete_fourthLevel/{first_id}/{second_id}/{third_id}/{fourth_id}:
 *   delete:
 *     summary: Delete a fourth level item by ID
 *     parameters:
 *       - in: path
 *         name: first_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the first level item
 *       - in: path
 *         name: second_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the second level item
 *       - in: path
 *         name: third_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *       - in: path
 *         name: fourth_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the third level item
 *     responses:
 *       200:
 *         description: Fourth level item successfully deleted
 */
router.delete('/delete_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.deleteFourthLevelItem);

module.exports = router;
