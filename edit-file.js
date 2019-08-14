'use strict';

const fs = require('fs');

class FileEdit {
    readFile(fileName, callback){
        fs.readFile(fileName, (error, fileContents) => {
            if (error){
                callback(error);
            } else {
                callback(undefined, fileContents.toString());
            }
        })
    }
}

module.exports = FileEdit;

