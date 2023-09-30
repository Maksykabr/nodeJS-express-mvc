const { json } = require('express');
const dataModel = require('../models/dataModel');

module.exports = {
  renderIndex: (req, res) => {
    res.render('index', { title: 'My Express Project' });
  },

// GET
  getAllItems: (req, res) => {
    dataModel.getAllItems((error, items) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.json(items)
    });
  },

  getFirstLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    dataModel.getFirstLevelItem(first_id, (error, foundObject) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      if (foundObject) {
        res.json(foundObject);
      } else {
        res.json({ message: 'Object not found' });
      }
    });
  },

  getSecondLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    dataModel.getSecondLevelItem(first_id, second_id, (error, secondObjects) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      if (secondObjects) {
        res.json(secondObjects);
      } else {
        res.json({ message: 'Object not found' });
      }
    });
  },

  getThirdLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    const third_id = req.params.third_id;
    dataModel.getThirdLevelItem(first_id, second_id, third_id, (error, thirdObjects) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      if (thirdObjects) {
        res.json(thirdObjects);
      } else {
        res.json({ message: 'Object not found' });
      }
    });
  },

  getFourthLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    const third_id = req.params.third_id;
    const fourth_id = req.params.fourth_id;
    dataModel.getFourthLevelItem(first_id, second_id, third_id, fourth_id, (error, fourthObjects) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      if (fourthObjects) {
        res.json(fourthObjects);
      } else {
        res.json({ message: 'Object not found' });
      }
    });
  },
// POST
  postFirstLevelItem: (req, res) => {
    const newItem = req.body;
    dataModel.postFirstLevelItem(newItem, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  postSecondLevelItem: (req, res) => {
    const newItem = req.body;
    dataModel.postSecondLevelItem(newItem, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  postThirdLevelItem: (req, res) => {
    const newItem = req.body;
    dataModel.postThirdLevelItem(newItem, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  postFourthLevelItem: (req, res) => {
    const newItem = req.body;
    dataModel.postFourthLevelItem(newItem, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

// PUT
  updateFirstLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const newItem = req.body;
    dataModel.updateFirstLevelItem(first_id, newItem, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  updateSecondLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    const newItem = req.body;
    dataModel.updateSecondLevelItem(first_id, second_id, newItem, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  updateThirdLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    const third_id = req.params.third_id;
    const newItem = req.body;
    dataModel.updateThirdLevelItem(first_id, second_id, third_id, newItem, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  updateFourthLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    const third_id = req.params.third_id;
    const fourth_id = req.params.fourth_id;
    const newItem = req.body;
    dataModel.updateFourthLevelItem(first_id, second_id, third_id, fourth_id, newItem, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

// DELETE

  deleteFirstLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    dataModel.deleteFirstLevelItem(first_id, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  deleteSecondLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    dataModel.deleteSecondLevelItem(first_id, second_id, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  deleteThirdLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    const third_id = req.params.third_id;
    dataModel.deleteThirdLevelItem(first_id, second_id, third_id, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },

  deleteFourthLevelItem: (req, res) => {
    const first_id = req.params.first_id;
    const second_id = req.params.second_id;
    const third_id = req.params.third_id;
    const fourth_id = req.params.fourth_id;
    dataModel.deleteFourthLevelItem(first_id, second_id, third_id, fourth_id, (error, response) => {
      if (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(response.status).json(response.message);
    });
  },
};
