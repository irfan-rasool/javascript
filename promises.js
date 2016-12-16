"use strict";

const fs = require('fs')

let readFile =  new Promise(function (resolve, reject) {
    fs.readFile('banners.csv', function (err, fileContent) {
      if (err) reject(err);
      resolve(fileContent.toString());
    })
})
.then((fileData) => {
    console.log(fileData);
})
.catch((err) => {
    console.log('error ==>', err); 
});