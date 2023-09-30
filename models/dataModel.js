const fs = require('fs');
const filePath = './data/data.json';

module.exports = {
  getAllItems: (callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      callback(null, items);
    });
  },
};
