import { instance } from './server.js';
import crypto from 'crypto';
import { db } from './server.js'; // Updated import for db

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, error: 'Failed to create order' });
  }
};

export const paymentVerification = async (req, res) => {
  console.log('Request body:', req.body);

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields',
    });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

  console.log("sig received:", razorpay_signature);
  console.log("sig generated:", expectedSignature);

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Insert new row into event2_razorpay_payments table
    const query = `INSERT INTO event2_razorpay_payments (razorpay_payment_id, razorpay_order_id, razorpay_signature) VALUES (?, ?, ?)`;
    db.query(query, [razorpay_payment_id, razorpay_order_id, razorpay_signature], (err, result) => {
      if (err) {
        console.error('Error inserting payment details:', err);
        res.status(500).json({
          success: false,
          error: 'Failed to insert payment details',
        });
      } else {
        res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
      }
    });
  } else {
    res.status(400).json({
      success: false,
      error: 'Invalid signature',
    });
  }
};
