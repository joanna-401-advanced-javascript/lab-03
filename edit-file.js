'use strict';

const fs = require('fs');

class FileEdit {
    readFile(fileName, callback){
        fs.readFile(fileName, (error, fileContents) => {
            if (error){
                callback(error);
            } else {
                callback(undefined, JSON.parse(fileContents.toString()));
            }
        })
    }

    writeFile(fileName, data, callback){
        fs.writeFile(fileName, data, (error, data) => {
            if (error){
                callback(error);
            } else {
                callback(undefined, data);
            }
        })
    }
}

module.exports = FileEdit;

