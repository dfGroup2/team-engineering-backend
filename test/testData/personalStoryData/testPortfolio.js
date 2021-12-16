const Portfolio = require('../../../models/personalStories/portfolio.model');
const testPortfolio1 = new Portfolio({
    title: "testTitle",
    url: "TestURL",
    year: "2021-12-01T13:20:36.186Z",
    weight: "TestWeight",
    priority: "123456",
    description: "TestDescription",
});

const testPortfolios = [testPortfolio1];

module.exports = testPortfolios;