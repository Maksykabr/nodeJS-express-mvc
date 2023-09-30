const express = require('express');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexController = require('./controllers/indexController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// GET methods
app.get('/', indexController.renderIndex);
app.get('/all_items', indexController.getAllItems);
app.get('get_fist', indexController.getFirstLevelItem)
app.get('/get_firstLevel/:first_id', indexController.getFirstLevelItem);
app.get('/get_secondLevel/:first_id/:second_id', indexController.getSecondLevelItem);
app.get('/get_thirdLevel/:first_id/:second_id/:third_id', indexController.getThirdLevelItem);
app.get('/get_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.getFourthLevelItem);

// POST methods
app.post('/post_firstLevel', indexController.postFirstLevelItem);
app.post('/post_secondLevel', indexController.postSecondLevelItem);
app.post('/post_thirdLevel', indexController.postThirdLevelItem);
app.post('/post_fourthLevel', indexController.postFourthLevelItem);

// PUT methods
app.put('/update_firstLevel/:first_id', indexController.updateFirstLevelItem);
app.put('/update_secondLevel/:first_id/:second_id', indexController.updateSecondLevelItem);
app.put('/update_thirdLevel/:first_id/:second_id/:third_id', indexController.updateThirdLevelItem);
app.put('/update_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.updateFourthLevelItem);

// DELETE methods
app.delete('/delete_firstLevel/:first_id', indexController.deleteFirstLevelItem);
app.delete('/delete_secondLevel/:first_id/:second_id', indexController.deleteSecondLevelItem);
app.delete('/delete_thirdLevel/:first_id/:second_id/:third_id', indexController.deleteThirdLevelItem);
app.delete('/delete_fourthLevel/:first_id/:second_id/:third_id/:fourth_id', indexController.deleteFourthLevelItem);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
