'use strict';

const FileEdit = require('../edit-file');
const faker = require('faker');

const currentEdit = new FileEdit();

console.log(__dirname);
const personFile = `${__dirname}/person.json`

currentEdit.readFile(personFile, (error, fileContents) => {
    if (error){
        console.error(error);
    } else {
        fileContents.firstName = faker.name.firstName();
        fileContents.lastName = faker.name.lastName();
        console.log('CALLBACK - CHANGED OBJECT', fileContents);
        let buffer = Buffer.from(JSON.stringify(fileContents));
        currentEdit.writeFile(personFile, buffer, (error) => {
            if (error){
                console.error(error);
            } else {
                currentEdit.readFile(personFile, (error, fileContents) => {
                    if (error){
                        console.error(error);
                    } else {
                        console.log('CALLBACK - DATA FROM CHANGED FILE', fileContents);
                    }
                })
            }
        })
    }
});

currentEdit.readFilePromises(personFile)
    .then(fileContents => {return JSON.parse(fileContents.toString())})
    .then(object => {
        object.firstName = faker.name.firstName();
        object.lastName = faker.name.lastName();
        console.log('PROMISE - CHANGED OBJECT', object);
        let buffer = Buffer.from(JSON.stringify(object));
        currentEdit.writeFilePromises(personFile, buffer);
    })
    .then(() => {
        return currentEdit.readFilePromises(personFile);
    })
    .then(fileContents => {console.log('PROMISE - DATA FROM CHANGED FILE', JSON.parse(fileContents.toString()))})
    .catch(error => console.error(error));