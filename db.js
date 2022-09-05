const { Sequelize, DataTypes } = require('sequelize')
const path = require('path')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'data.sqlite')
})

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.Tenant = require('./models/tenant.model')(sequelize, DataTypes)
module.exports = db