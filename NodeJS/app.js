const fs = require('fs');
const path = require('path');
const products = require('./products.json');
const csv = require('csv-parser');
const results = [];
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


// 1.  creating adn writing json file using NodeJS:
const person = {
    gender: 'male',
    name: 'John',
    lastName: 'Wick',
    age: 43,
    profession: 'killer'
}

//
// fs.writeFile('test.json', JSON.stringify(person), (err) => {
//     if (err) {
//         console.log('error');
//     }
// });

// 2. read json file:


// console.log(products[10]);


// // 3. read CSV file coma separate
// fs.createReadStream('csvTest.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//
//     });

// 4. write csv file
const csvWriterTest = createCsvWriter({
    path: 'file.csv',
    header: [
        {id: 'gender', title: 'GENDER'},
        {id: 'name', title: 'NAME'},
        {id: 'lastName', title: 'LASTNAME'},
        {id: 'age', title: 'AGE'},
        {id: 'profession', title: 'PROFESSION'}
    ]
});


const data = [
    {
        gender: 'male',
        name: 'John',
        lastName: 'Wick',
        age: 43,
        profession: 'killer'
    },
    {
        gender: 'female',
        name: 'Jess',
        lastName: 'Wisok',
        age: 23,
        profession: false
    },
    {
        gender: 'male',
        name: 'Bill',
        lastName: 'Click',
        age: 26,
        profession: 'doctor'
    },
];

csvWriterTest.writeRecords(data)
    .then(() => {
        console.log('...Done');
    });

