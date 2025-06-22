
// require('dotenv').config();
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // FIXED: added name and renamed 'date' to 'deliveryDate'
// const sendOrderConfirmation = async (to, name, total, deliveryDate) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject: 'Order Confirmation - VogueVibes',
//     html: `
//       <div style="background-color: #D3D3FF; color: #575799; padding: 40px; font-family: 'Arial', sans-serif; line-height: 1.6; border-radius: 8px;">
//         <h2 style="margin-top: 0;">Hello ${name || 'Customer'},</h2>
//         <p style="font-size: 16px;">
//           Thank you for ordering from VogueVibes! We're thrilled to have you as a customer. Your order is being processed and will be delivered to you soon.
//         </p>
//         <h3 style="margin: 30px 0 10px;">Here are your order details:</h3>
//         <ul style="padding-left: 20px; font-size: 16px;">
//           <li><strong>Total:</strong> ₹${total}</li>
//           <li><strong>Estimated Delivery Date:</strong> ${deliveryDate}</li>
//         </ul>
//         <p style="margin-top: 40px;">With love,<br/><strong>Team VogueVibes 💜</strong></p>
//       </div>
//     `
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('✅ Email sent!');
//   } catch (err) {
//     console.error('❌ Failed to send email:', err);
//   }
// };

// module.exports = sendOrderConfirmation;
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
require('dotenv').config();

const EMAIL_USER = functions.config().gmail.email;
const EMAIL_PASS = functions.config().gmail.password;
// const EMAIL_USER = functions.config().gmail.email || process.env.EMAIL_USER ;
// const EMAIL_PASS =  functions.config().gmail.password || process.env.EMAIL_PASS ;


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

const sendOrderConfirmation = async (to, name, total, deliveryDate) => {
  const mailOptions = {
    from: EMAIL_USER,
    to,
    subject: 'Order Confirmation - VogueVibes',
    html: `
      <div style="background-color: #D3D3FF; color: #575799; padding: 40px; font-family: 'Arial', sans-serif; line-height: 1.6; border-radius: 8px;">
        <h2 style="margin-top: 0;">Hello ${name || 'Customer'},</h2>
        <p style="font-size: 16px;">
          Thank you for ordering from VogueVibes! We're thrilled to have you as a customer. Your order is being processed and will be delivered to you soon.
        </p>
        <h3 style="margin: 30px 0 10px;">Here are your order details:</h3>
        <ul style="padding-left: 20px; font-size: 16px;">
          <li><strong>Total:</strong> ₹${total}</li>
          <li><strong>Estimated Delivery Date:</strong> ${deliveryDate}</li>
        </ul>
        <p style="margin-top: 40px;">With love,<br/><strong>Team VogueVibes 💜</strong></p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent!');
  } catch (err) {
    console.error('❌ Failed to send email:', err);
  }
};

module.exports = sendOrderConfirmation;
