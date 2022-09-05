const express = require('express')
const db = require('../../db')

const app = express.Router()

app.get('/delete/:id', async (req, res) => {
    try {
        const tenant = await db.Tenant.findByPk(req.params.id)
        if (tenant !== null) {
            await tenant.destroy()
            req.flash('success', 'Tenant deleted successfully')
            res.redirect('/tenant/view')
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