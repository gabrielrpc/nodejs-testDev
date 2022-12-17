const fs = require("fs");

const JSONWrite = (file, data, encoding = "utf-8") => {
  const promiseCalback = (resolve, reject) => {
    fs.writeFile(file, JSON.stringify(data, null, 2), encoding, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(true);
    });
  };
  return new Promise(promiseCalback);
};

const JSONRead = (file, newData, encoding = "utf-8") => {
  const promiseCalback = (resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        const object = JSON.parse(data);
        object.data.push(newData);
        resolve(object);
      } catch (e) {
        reject(e);
      }
    });
  };
  return new Promise(promiseCalback);
};


module.exports = {JSONRead, JSONWrite}