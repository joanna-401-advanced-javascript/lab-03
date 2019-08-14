'use strict';

const FileEdit = require('../edit-file');
const faker = require('faker');

const currentEdit = new FileEdit();

// console.log(__dirname);

currentEdit.readFile(`${__dirname}/person.json`, (error, fileContents) => {
    if (error){
        console.error(error);
    } else {
        let currentObject = JSON.parse(fileContents);
        console.log('current object', currentObject);
        currentObject.firstName = faker.name.firstName();
        currentObject.lastName = faker.name.lastName();
        console.log('new object', currentObject);
    }
})