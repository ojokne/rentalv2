const express = require('express')
const db = require('../../db')
const app = express.Router()

app.route('/add')
    .get((req, res) => {
        // db.Tenant.create({
        //     firstName: 'Ojok',
        //     lastName: "Emma",
        //     gender: "MALE",
        //     dob: '2000-02-22',
        //     mobileNumber: "000000",
        //     whatsAppNumber: "00000",
        //     address: "MAin road"
        // }).then(() => {
        //     console.log('Created');
        // })
        // console.log(req.flash('success'));
        res.render('tenant/add', { success: req.flash('success'), failure: req.flash('failure') })
    })
    .post(async (req, res) => {
        if (req.body) {
            firstName = req.body.firstName
            lastName = req.body.lastName
            gender = req.body.gender
            dob = req.body.dob
            mobileNumber = req.body.mobileNumber
            whatsAppNumber = req.body.whatsAppNumber
            address = req.body.address
            try {
                await db.Tenant.create({
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender,
                    dob: dob,
                    mobileNumber: mobileNumber,
                    whatsAppNumber: whatsAppNumber,
                    address: address
                })
                req.flash('success', 'Tenant details captured')
                console.log(`${firstName} added to database`);
                res.redirect('add')
            }
            catch (err) {
                req.flash('failure', 'A problem occured')

            }
        }
        else {
            res.render('tenant/add')
        }
    })

module.exports = app