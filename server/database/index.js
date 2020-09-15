const Sequelize = require('sequelize');
const chalk = require('chalk')

console.log(chalk.yellow('Opening database connection to '), chalk.blue('boilermaker'))

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boilermaker', {logging: false});

db.define('test-model', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = db;
