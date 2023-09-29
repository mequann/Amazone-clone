/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express=require("express");
const cors=require("cors");
const { getApp } = require("firebase-functions/lib/common/app");
const stripe=require('stripe')('pk_test_51NvcAgD6gAjDZKAk2c5Jh9qFcIoeChOlaY6hXmurjN6I96zI2So0wJDNvlfiNJRPXJf4E5Wvb2EXnan0eXBvvLrM00ii2CohCR');
//app config
const app=express();
//milddlewares
app.use(cors({origin:true}));
app.use(express.json())
//route
app.get('/',(req,res)=>{
    res.status(200).send('hello mequannt')
})
//listener
exports.api=functions.https.onRequest(app)

