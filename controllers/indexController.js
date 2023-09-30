const dataModel = require('../models/dataModel');

module.exports = {
  renderIndex: (req, res) => {
    res.render('index', { title: 'My Express Project' });
  },
  getAllItems: (req, res) => {
    dataModel.getAllItems((error, items) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.json(items);
    });
  },
};
