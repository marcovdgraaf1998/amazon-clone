const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51Hx9e6DZ316V0ELv4Wr0zb6EBcPSOsCyofSmmhRpn2VWjnBoDd65QKwQKLYF55fImcT4eenQFaIBHDKQ3GyxnggH00hBri0jc1');

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get('/', (request, response) => response.status(200).send('hello world!'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received boom!!! for this amount ->>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'eur',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);
