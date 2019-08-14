'use strict';

const FileEdit = require('../edit-file');
const faker = require('faker');

const currentEdit = new FileEdit();

console.log(__dirname);

currentEdit.readFile(`${__dirname}/person.json`, (error, fileContents) => {
    if (error){
        console.error(error);
    } else {
        fileContents.firstName = faker.name.firstName();
        fileContents.lastName = faker.name.lastName();
        let buf = Buffer.from(JSON.stringify(fileContents));
        currentEdit.writeFile(`${__dirname}/person.json`, buf, (error) => {
            if (error){
                console.error(error);
            } else {
                currentEdit.readFile(`${__dirname}/person.json`, (error, fileContents) => {
                    if (error){
                        console.error(error);
                    } else {
                        console.log('CHANGED FILE INFORMATION', fileContents);
                    }
                })
            }
        })
    }
});