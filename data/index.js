'use strict';

const FileEdit = require('../edit-file');

const currentEdit = new FileEdit();

console.log(__dirname);

currentEdit.readFile(`${__dirname}/person.json`, (error, fileContents) => {
    if (error){
        console.error(error);
    } else {
        console.log(fileContents);
    }
})