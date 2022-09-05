const express = require('express')
const db = require('../../db')
const app = express.Router()


app.route('/view')
    .get(async (req, res) => {
        const tenants = new Array()
        const data = await db.Tenant.findAll()
        for (let i = 0; i < data.length; i++) {
            tenants[i] = data[i].dataValues
        }
        res.render('tenant/view', { success: req.flash('success'), failure: req.flash('failure'), tenants: tenants })
    })
app.route('/view/:id')
    .get(async (req, res) => {
        try {

            const tenant = await db.Tenant.findByPk(req.params.id)
            if (tenant !== null) {
                res.render('tenant/tenant', { tenant: tenant, success: req.flash('success'), failure: req.flash('failure') })
            } else {
                req.flash('failure', 'No tenant found')
                res.redirect('/tenant/view')
            }
        }
        catch (err) {
            console.log(err);
        }
    })

module.exports = app