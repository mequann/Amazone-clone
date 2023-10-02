/**
import { useStripe } from '@stripe/react-stripe-js';
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const express=require('express');
const cors=require('cors');
const  stripe=require('stripe')('sk_test_51NvcAgD6gAjDZKAkSJBCLaHMktriBhOp9RUXsKKHkUOJXewDl7jucFLLgbnZG50HfTmj55ECJUjeX3pHBFeiKB6j00H7qw86cM');
const functions=require('firebase-functions');
// config app
const app=express();
//middle wares
app.use(cors({origin:true}));
app.use(express.json())
//route
app.get('/',(req,res)=>{
    res.status(200).send("Hello Mequannt")})
// app.get('/Evangadi',(req,res)=>{
//     res.status(200).send("Hello Evangadi COmmunity")
// })
app.post('/payments/create',async(req,res)=>{
    // '/payements/create/:total'
    //  const total=req.params.total;  
    const total=req.query.total;  
    // console.log("server is geting")
    console.log(total)
    let newTotal = parseInt(total)
    console.log('payment requiest recieved for this amount >>' ,newTotal)
    const paymentIntent=await stripe.paymentIntents.create({
       amount:newTotal,
       currency:'usd' ,
    })
    // ok created
    console.log(paymentIntent)
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})
// listener
exports.api=functions.https.onRequest(app);

//baseUrl:http://127.0.0.1:5001/clone-9e0f3/us-central1/api