const db = require('../database/database')
const express = require('express')
const bp = require('body-parser')
const nodemailer = require('nodemailer')
const dbb = require('mongoose')
const { default: mongoose } = require('mongoose');
const app = express();
const feedback = require('../models/model')
app.use(bp.urlencoded({ extended: false }));

app.use(bp.json())


exports.index = async (req, res) => {
    res.render('index.ejs', { title: 'Tectovia' })
};

exports.contact = async (req, res) => {
    res.render('contact.ejs', { title: 'Contact' })
};

exports.about_us = async (req, res) => {
    res.render('about_us.ejs', { title: 'About' })
};

exports.sign_in = async (req, res) => {
    res.render('sign_in.ejs', { title: 'Sign In' })
};

exports.sign_up = async (req, res) => {
    res.render('sign_up.ejs', { title: 'Sign Up' })
};
exports.workshop = async (req, res) => {
    res.render('workshop.ejs', { title: 'Workshop' })
};
exports.placement = async (req, res) => {
  res.render('placement.ejs', { title: 'placement' })
};




// Nodemailer feedback Section
exports.feedback = async(req, res) => {
  const { name, email, message } = req.body;

// Saving the feedBack in DataBase

    var val = new feedback({
    
      From: name,
      Email: email,
      Message:message,
  })
    val.save().then(() => {
    console.log("model success");
    }).catch((err)=> {
      console.log('Error updating Database');
  })
    

  // Create a Nodemailer transporter using SMTP
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'collegematterzz@gmail.com',
        pass: 'qrpu cxhe ulpn pnjh',
      },
    });
   
  
  // Email content
  
  const mailOptions = {
    from: email,
    to: 'collegematterzz@gmail.com', // Change this to your email address
    subject: 'Feedback',

    text: `Name: ${name}\nFrom: ${email}\nMessage: ${message}`,
  };

  // Send email
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Email sent:', info.response);
        console.log('email send Successfull')
        //res.render('contact.ejs',{ title: 'Contact' })
        res.render('contact',{ title: 'Contact' })
      }
    });
};
  