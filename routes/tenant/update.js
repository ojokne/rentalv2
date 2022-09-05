const express = require('express')
const db = require('../../db')

const app = express.Router()

app.get('/update/:id', async (req, res) => {
    try {
        const tenant = await db.Tenant.findByPk(req.params.id)
        if (tenant !== null) {
            res.render('tenant/update', { tenant: tenant })
        } else {
            req.flash('failure', 'No tenant found')
            res.redirect('/tenant/view')
        }
    }
    catch (err) {
        console.log(err);
    }
})

app.post('/update/:id', async (req, res) => {
    try {
        const tenant = await db.Tenant.findByPk(req.params.id)
        if (tenant !== null) {
            // res.render('tenant/update', { tenant: tenant })
            firstName = req.body.firstName
            lastName = req.body.lastName
            gender = req.body.gender
            dob = req.body.dob
            mobileNumber = req.body.mobileNumber
            whatsAppNumber = req.body.whatsAppNumber
            address = req.body.address

            try {

                tenant.firstName = firstName
                tenant.lastName = lastName
                tenant.gender = gender
                tenant.dob = dob
                tenant.mobileNumber = mobileNumber
                tenant.whatsAppNumber = whatsAppNumber
                tenant.address = address
                await tenant.save()
                req.flash('success', 'Tenant details updated')
                res.redirect(`/tenant/view/${req.params.id}`)

            }
            catch (err) {
                req.flash('failure', 'No tenant found')
                res.redirect(`/tenant/tenant/${req.params.id}`)
            }
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