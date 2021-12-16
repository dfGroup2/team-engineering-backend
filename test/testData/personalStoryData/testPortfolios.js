const { Portfolio } = require('../../../models/personalStories/portfolio.model');

const testPortfolio1 = new Portfolio({
    title: "testTitle",
    url: "TestURL",
    year: "2021-12-01T13:20:36.186Z",
    weight: "TestWeight",
    priority: 123456,
    description: "TestDescription",
});

const testPortfolio2 = new Portfolio({
    title: "testTitle2",
    url: "TestURL2",
    year: "2021-12-01T13:20:36.186Z",
    weight: "TestWeight2",
    priority: 123456,
    description: "TestDescription2",
});

const testPortfolios = [testPortfolio1, testPortfolio2];

module.exports = testPortfolios;