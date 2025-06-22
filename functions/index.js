


// const express = require('express');
// const cors = require('cors');
// const sendOrderConfirmation = require('./mailer');
// const functions = require('firebase-functions');

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Root route
// app.get('/', (req, res) => {
//   res.send('Express App is Running from Firebase Functions');
// });

// // Email route
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

// ✅ Proper CORS middleware setup
app.use(cors({
  origin: true, // or use "https://your-vercel-app.vercel.app" to restrict
  credentials: true
}));

app.use(express.json());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Express App is Running from Firebase Functions');
});

// ✅ Email route
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

// ✅ Export Firebase HTTPS function
exports.api = functions.https.onRequest(app);
