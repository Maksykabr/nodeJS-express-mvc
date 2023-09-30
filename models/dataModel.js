const fs = require('fs');
const filePath = './data/data.json';

module.exports = {
// GET
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

  getFirstLevelItem: (first_id, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const foundObject = items.find((item) => item['Перший рівень'] == first_id);
      callback(null, foundObject);
    });
  },

  getSecondLevelItem: (first_id, second_id, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const firstObjects = items.find((object) => object['Перший рівень'] == first_id);
      if (firstObjects) {
        const second_preparedObjects = firstObjects['Масив елементів другого рівня'];
        const foundObject = second_preparedObjects.find((object) => object['Другий рівень'] == second_id);
        callback(null, foundObject);
      } else {
        callback(null, null);
      }
    });
  },

  getThirdLevelItem: (first_id, second_id, third_id, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const firstObjects = items.find((object) => object['Перший рівень'] == first_id);
      if (firstObjects) {
        const first_preparedObjects = firstObjects['Масив елементів другого рівня'];
        const secondObjects = first_preparedObjects.find((object) => object['Другий рівень'] == second_id);
        if (secondObjects) {
          const second_preparedObjects = secondObjects['Масив елементів третього рівня'];
          const foundObject = second_preparedObjects.find((object) => object['Третій рівень'] == third_id);
          callback(null, foundObject);
        } else {
          callback(null, null);
        }
      } else {
        callback(null, null);
      }
    });
  },

  getFourthLevelItem: (first_id, second_id, third_id, fourth_id, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const firstObjects = items.find((object) => object['Перший рівень'] == first_id);
      if (firstObjects) {
        const first_preparedObjects = firstObjects['Масив елементів другого рівня'];
        const secondObjects = first_preparedObjects.find((object) => object['Другий рівень'] == second_id);
        if (secondObjects) {
          const second_preparedObjects = secondObjects['Масив елементів третього рівня'];
          const thirdObjects = second_preparedObjects.find((object) => object['Третій рівень'] == third_id);
          if (thirdObjects) {
            const third_preparedObjects = thirdObjects['Масив елементів четвертого рівня'];
            const foundObject = third_preparedObjects.find((object) => object['Четвертий рівень'] == fourth_id);
            callback(null, foundObject);
          } else {
            callback(null, null);
          }
        } else {
          callback(null, null);
        }
      } else {
        callback(null, null);
      }
    });
  },

// POST 
  postFirstLevelItem: (newItem, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const existingItem = items.find((item) => item['Перший рівень'] == newItem['Перший рівень']);

      if (existingItem) {
        callback({ status: 409, message: 'Item already exists' }, null);
      } else if (newItem['Другий рівень'] !== "" || newItem['Третій рівень'] !== "" || newItem['Четвертий рівень'] !== "") {
        callback({ status: 406, message: 'Not Acceptable' }, null);
      } else {
        items.push(newItem);
        fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
          if (err) {
            console.error(err);
            callback(err, null);
            return;
          }
          callback(null, newItem);
        });
      }
    });
  },

  postSecondLevelItem: (newItem, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const existingItem = items.find((item) => item['Перший рівень'] == newItem['Перший рівень']);

      if (!existingItem) {
        callback({ status: 400, message: 'Parent item does not exist' }, null);
      } else if (newItem['Другий рівень'] === '') {
        callback({ status: 400, message: 'This object doesn\'t have [\'Другий рівень\']' }, null);
      } else if (newItem['Третій рівень'] !== "" || newItem['Четвертий рівень'] !== "") {
        callback({ status: 406, message: 'Not Acceptable' }, null);
      } else {
        if (!existingItem['Масив елементів другого рівня']) {
          existingItem['Масив елементів другого рівня'] = [];
        }
        existingItem['Масив елементів другого рівня'].push(newItem);
        fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
          if (err) {
            console.error(err);
            callback(err, null);
            return;
          }
          callback(null, newItem);
        });
      }
    });
  },

  postThirdLevelItem: (newItem, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const firstElement = items.find((item) => item['Перший рівень'] == newItem['Перший рівень']);

      if (!firstElement) {
        callback({ status: 400, message: 'Parent item does not exist' }, null);
      } else {
        const secondElements = firstElement['Масив елементів другого рівня'];
        const secondElement = secondElements.find((item) => item['Другий рівень'] == newItem['Другий рівень']);

        if (!secondElement) {
          callback({ status: 400, message: 'Second-level item does not exist' }, null);
        } else if (newItem['Третій рівень'] === '') {
          callback({ status: 400, message: 'This object doesn\'t have [\'Третій рівень\']' }, null);
        } else if (newItem['Четвертий рівень'] !== "") {
          callback({ status: 406, message: 'Not Acceptable' }, null);
        } else {
          if (!secondElement['Масив елементів третього рівня']) {
            secondElement['Масив елементів третього рівня'] = [];
          }
          secondElement['Масив елементів третього рівня'].push(newItem);
          fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
            if (err) {
              console.error(err);
              callback(err, null);
              return;
            }
            callback(null, firstElement);
          });
        }
      }
    });
  },

  postFourthLevelItem: (newItem, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const firstElement = items.find((item) => item['Перший рівень'] == newItem['Перший рівень']);

      if (!firstElement) {
        callback({ status: 400, message: 'Parent item does not exist' }, null);
      } else {
        const secondElements = firstElement['Масив елементів другого рівня'];
        const secondElement = secondElements.find((item) => item['Другий рівень'] == newItem['Другий рівень']);

        if (!secondElement) {
          callback({ status: 400, message: 'Second-level item does not exist' }, null);
        } else {
          const thirdElements = secondElement['Масив елементів третього рівня'];
          const thirdElement = thirdElements.find((item) => item['Третій рівень'] == newItem['Третій рівень']);

          if (!thirdElement) {
            callback({ status: 400, message: 'Third-level item does not exist' }, null);
          } else if (newItem['Четвертий рівень'] === '') {
            callback({ status: 400, message: 'This object doesn\'t have [\'Четвертий рівень\']' }, null);
          } else {
            if (!thirdElement['Масив елементів четвертого рівня']) {
              thirdElement['Масив елементів четвертого рівня'] = [];
            }
            thirdElement['Масив елементів четвертого рівня'].push(newItem);
            fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
              if (err) {
                console.error(err);
                callback(err, null);
                return;
              }
              callback(null, firstElement);
            });
          }
        }
      }
    });
  },

// PUT
  updateFirstLevelItem: (first_id, newItem, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const first_object = items.find((item) => item['Перший рівень'] == first_id);
      
      if (!first_object) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      first_object['Перший рівень'] = newItem['Перший рівень'];
      first_object['Другий рівень'] = newItem['Другий рівень'];
      first_object['Третій рівень'] = newItem['Третій рівень'];
      first_object['Четвертий рівень'] = newItem['Четвертий рівень'];
      first_object['Категорія'] = newItem['Категорія'];
      first_object['Назва об\'єкта українською мовою'] = newItem['Назва об\'єкта українською мовою'];

      fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
        if (err) {
          console.error(err);
          callback(err, null);
          return;
        }
        callback(null, first_object);
      });
    });
  },

  updateSecondLevelItem: (first_id, second_id, newItem, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const first_object = items.find((item) => item['Перший рівень'] == first_id);
      
      if (!first_object) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      second_elements = first_object['Масив елементів другого рівня'];
      second_element = second_elements.find((item) => item['Другий рівень'] == second_id);
      
      if (!second_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      second_element['Другий рівень'] = newItem['Другий рівень'];
      second_element['Третій рівень'] = newItem['Третій рівень'];
      second_element['Четвертий рівень'] = newItem['Четвертий рівень'];
      second_element['Категорія'] = newItem['Категорія'];
      second_element['Назва об\'єкта українською мовою'] = newItem['Назва об\'єкта українською мовою'];

      fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
        if (err) {
          console.error(err);
          callback(err, null);
          return;
        }
        callback(null, first_object);
      });
    });
  },

  updateThirdLevelItem: (first_id, second_id, third_id, newItem, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const first_object = items.find((item) => item['Перший рівень'] == first_id);
      
      if (!first_object) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      second_elements = first_object['Масив елементів другого рівня'];
      second_element = second_elements.find((item) => item['Другий рівень'] == second_id);
      
      if (!second_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      third_elements = second_element['Масив елементів третього рівня'];
      third_element = third_elements.find((item) => item['Третій рівень'] == third_id);
      
      if (!third_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      third_element['Третій рівень'] = newItem['Третій рівень'];
      third_element['Четвертий рівень'] = newItem['Четвертий рівень'];
      third_element['Категорія'] = newItem['Категорія'];
      third_element['Назва об\'єкта українською мовою'] = newItem['Назва об\'єкта українською мовою'];

      fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
        if (err) {
          console.error(err);
          callback(err, null);
          return;
        }
        callback(null, third_element);
      });
    });
  },

  updateFourthLevelItem: (first_id, second_id, third_id, fourth_id, newItem, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const first_object = items.find((item) => item['Перший рівень'] == first_id);
      
      if (!first_object) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      second_elements = first_object['Масив елементів другого рівня'];
      second_element = second_elements.find((item) => item['Другий рівень'] == second_id);
      
      if (!second_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      third_elements = second_element['Масив елементів третього рівня'];
      third_element = third_elements.find((item) => item['Третій рівень'] == third_id);
      
      if (!third_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      fourth_elements = third_element['Масив елементів четвертого рівня'];
      fourth_element = fourth_elements.find((item) => item['Четвертий рівень'] == fourth_id);
      
      if (!fourth_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      fourth_element['Четвертий рівень'] = newItem['Четвертий рівень'];
      fourth_element['Категорія'] = newItem['Категорія'];
      fourth_element['Назва об\'єкта українською мовою'] = newItem['Назва об\'єкта українською мовою'];

      fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
        if (err) {
          console.error(err);
          callback(err, null);
          return;
        }
        callback(null, fourth_element);
      });
    });
  },

// DELETE
  deleteFirstLevelItem: (first_id, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const itemIndexToDelete = items.findIndex((item) => item['Перший рівень'] == first_id);

      if (itemIndexToDelete === -1) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      items.splice(itemIndexToDelete, 1);

      fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
        if (err) {
          console.error(err);
          callback(err, null);
          return;
        }
        callback(null, { message: 'Object deleted successfully' });
      });
    });
  },

  deleteSecondLevelItem: (first_id, second_id, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const first_object = items.find((item) => item['Перший рівень'] == first_id);

      if (!first_object) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      const second_elements = first_object['Масив елементів другого рівня'];
      const itemIndexToDelete = second_elements.findIndex((item) => item['Другий рівень'] == second_id);

      if (itemIndexToDelete === -1) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      second_elements.splice(itemIndexToDelete, 1);

      fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
        if (err) {
          console.error(err);
          callback(err, null);
          return;
        }
        callback(null, { message: 'Object deleted successfully' });
      });
    });
  },

  deleteThirdLevelItem: (first_id, second_id, third_id, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const first_object = items.find((item) => item['Перший рівень'] == first_id);

      if (!first_object) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      const second_elements = first_object['Масив елементів другого рівня'];
      const second_element = second_elements.find((item) => item['Другий рівень'] == second_id);

      if (!second_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      const third_elements = second_element['Масив елементів третього рівня'];
      const itemIndexToDelete = third_elements.findIndex((item) => item['Третій рівень'] == third_id);

      if (itemIndexToDelete === -1) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      third_elements.splice(itemIndexToDelete, 1);

      fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
        if (err) {
          console.error(err);
          callback(err, null);
          return;
        }
        callback(null, { message: 'Object deleted successfully' });
      });
    });
  },

  deleteFourthLevelItem: (first_id, second_id, third_id, fourth_id, callback) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        console.error(error);
        callback(error, null);
        return;
      }
      const items = JSON.parse(data);
      const first_object = items.find((item) => item['Перший рівень'] == first_id);

      if (!first_object) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      const second_elements = first_object['Масив елементів другого рівня'];
      const second_element = second_elements.find((item) => item['Другий рівень'] == second_id);

      if (!second_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      const third_elements = second_element['Масив елементів третього рівня'];
      const third_element = third_elements.find((item) => item['Третій рівень'] == third_id);

      if (!third_element) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      const fourth_elements = third_element['Масив елементів четвертого рівня'];
      const itemIndexToDelete = fourth_elements.findIndex((item) => item['Четвертий рівень'] == fourth_id);

      if (itemIndexToDelete === -1) {
        callback({ status: 404, message: 'Object not found' }, null);
        return;
      }

      fourth_elements.splice(itemIndexToDelete, 1);

      fs.writeFile(filePath, JSON.stringify(items, null, 2), (err) => {
        if (err) {
          console.error(err);
          callback(err, null);
          return;
        }
        callback(null, { message: 'Object deleted successfully' });
      });
    });
  },
};
