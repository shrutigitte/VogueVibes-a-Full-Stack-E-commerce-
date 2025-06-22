

// const express = require('express');
// const cors = require('cors');
// const sendOrderConfirmation = require('./mailer');
// const functions = require('firebase-functions');
// require('dotenv').config();

// const app = express();

// // ✅ Manually handle preflight requests
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://voguevibestore.vercel.app");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", "true");

//   if (req.method === "OPTIONS") {
//     return res.status(204).send("");
//   }

//   next();
// });

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Express App is Running from Firebase Functions');
// });

// app.post('/send-confirmation', async (req, res) => {
//   const { email, name, total, deliveryDate } = req.body;

//   try {
//     await sendOrderConfirmation(email, name, total, deliveryDate);
//     res.status(200).json({ success: true, message: 'Email sent' });
//   } catch (error) {
//     console.error('❌ Email Error:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// exports.api = functions.https.onRequest(app);
const express = require('express');
const cors = require('cors');
const sendOrderConfirmation = require('./mailer');
const functions = require('firebase-functions');
require('dotenv').config();

const app = express();

//  Set CORS Headers for all routes including preflight
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://voguevibesstore.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express App is Running from Firebase Functions');
});

app.post('/send-confirmation', async (req, res) => {
  const { email, name, total, deliveryDate } = req.body;

  try {
    await sendOrderConfirmation(email, name, total, deliveryDate);
    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (error) {
    console.error('❌ Email Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.api = functions.https.onRequest(app);

