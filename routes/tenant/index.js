const express = require('express')
const addTenant = require('./add')
const viewTenant = require('./view')
const deleteTenant = require('./delete')
const updateTenant = require('./update')

const app = express.Router()

app.use(addTenant)
app.use(viewTenant)
app.use(deleteTenant)
app.use(updateTenant)

module.exports = app
