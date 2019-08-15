'use strict';

const fs = require('fs');
const fsExtra = require('fs-extra');

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

    readFilePromises(fileName){
        return fsExtra.readFile(fileName);
    }

    writeFilePromises(fileName, data){
        return fsExtra.writeFile(fileName, data);
    }
}

module.exports = FileEdit;

