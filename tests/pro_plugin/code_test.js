Feature('All the test codes are held');
var slugify = require('slugify');
var faker = require('faker');
Scenario('Experiment ZOne', async({ I }) => {
    for (let i = 0; i <= 1; i++) {
        // var variable = faker.datatype.number({ min: 10, max: 20 });
        // var slug_var = faker.datatype.uuid(10);
        // var seeds = faker.seed(142);
        var city = Date();
        // console.log('The value of variable', variable);
        // console.log('the value of slug', slug_var);
        console.log('I am currently in', city);
    }
})