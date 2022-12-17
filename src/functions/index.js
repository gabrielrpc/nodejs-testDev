const fs = require("fs");

const JSONRead = (file, encoding = "utf-8") => {
  const promiseCalback = (resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        const object = JSON.parse(data);
        resolve(object);
      } catch (e) {
        reject(e);
      }
    });
  };
  return new Promise(promiseCalback);
};


module.exports = {JSONRead}