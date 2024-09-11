// paymentController.js
import crypto from 'crypto';
import supabase from './supabase.js'; // Correct import for default export
import { instance } from './server.js'; // Import Razorpay instance

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: 'INR',
    };

    console.log('Creating Razorpay order with options:', options);

    const order = await instance.orders.create(options);

    if (!order) {
      return res.status(500).json({
        success: false,
        error: 'Failed to create order',
      });
    }

    console.log('Razorpay order response:', order);
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
    try {
      // Insert payment details into Supabase
      const { data, error } = await supabase
        .from('event2_razorpay_payments')
        .insert([
          { razorpay_payment_id, razorpay_order_id, razorpay_signature, created_at: new Date().toISOString() }
        ]);

      if (error) {
        console.error('Error inserting payment details:', error);
        return res.status(500).json({
          success: false,
          error: 'Failed to insert payment details',
        });
      }

      res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    } catch (error) {
      console.error('Error with Supabase:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to insert payment details',
      });
    }
  } else {
    res.status(400).json({
      success: false,
      error: 'Invalid signature',
    });
  }
};
