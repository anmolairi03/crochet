# Razorpay Payment Gateway Setup

## Quick Setup Guide

### 1. Get Your Razorpay API Keys

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Go to **Settings** → **API Keys**
3. Copy your **Key ID** (starts with `rzp_test_` for test mode or `rzp_live_` for live mode)

### 2. Configure Environment Variable

Create a `.env` file in the root directory:

```env
VITE_RAZORPAY_KEY=rzp_test_YOUR_KEY_HERE
```

**Important:** 
- For testing, use Test Mode keys (starts with `rzp_test_`)
- For production, use Live Mode keys (starts with `rzp_live_`)
- Never commit your `.env` file to version control

### 3. Test Payment

1. Start the development server: `npm run dev`
2. Add products to cart
3. Go to checkout
4. Fill in shipping information
5. Click "Pay with Razorpay"
6. Use Razorpay test cards:
   - **Card Number:** 4111 1111 1111 1111
   - **CVV:** Any 3 digits
   - **Expiry:** Any future date

### 4. Production Setup (Recommended)

For production, you should:

1. **Create Orders Server-Side:**
   - Create orders on your backend before initiating payment
   - Pass the `order_id` to Razorpay

2. **Verify Payments Server-Side:**
   - Always verify payment signatures on your backend
   - Update `src/utils/razorpay.ts` to call your verification API

3. **Use Webhooks:**
   - Set up Razorpay webhooks for payment status updates
   - Handle payment failures and refunds

### Example Backend Integration

```javascript
// Backend API endpoint example
app.post('/api/create-order', async (req, res) => {
  const { amount } = req.body;
  
  const order = await razorpay.orders.create({
    amount: amount * 100, // Convert to paise
    currency: 'INR',
  });
  
  res.json({ orderId: order.id });
});

app.post('/api/verify-payment', async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const crypto = require('crypto');
  const secret = process.env.RAZORPAY_SECRET;
  const generated_signature = crypto
    .createHmac('sha256', secret)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');
  
  if (generated_signature === razorpay_signature) {
    // Payment verified - update order status in database
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: 'Invalid signature' });
  }
});
```

### Support

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Dashboard](https://dashboard.razorpay.com/)
- [Test Cards](https://razorpay.com/docs/payments/test-cards/)

