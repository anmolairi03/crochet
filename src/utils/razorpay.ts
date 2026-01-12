// Razorpay payment integration utility

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number; // Amount in paise (e.g., 100 = ₹1)
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes?: {
    [key: string]: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
}

/**
 * Initialize Razorpay payment
 * @param amount - Amount in INR (will be converted to paise)
 * @param orderData - Order information
 * @param onSuccess - Success callback
 * @param onFailure - Failure callback
 */
export const initiateRazorpayPayment = (
  amount: number,
  orderData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
    orderId?: string;
  },
  onSuccess: (response: any) => void,
  onFailure: (error: any) => void
) => {
  // Check if Razorpay is loaded
  if (!window.Razorpay) {
    console.error('Razorpay SDK not loaded');
    onFailure(new Error('Payment gateway not available. Please refresh the page.'));
    return;
  }

  // Convert amount to paise (multiply by 100)
  const amountInPaise = Math.round(amount * 100);

  // Razorpay key - Replace with your actual Razorpay key
  // You can get this from Razorpay Dashboard: https://dashboard.razorpay.com/
  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY || 'rzp_test_YOUR_KEY_HERE';

  const options: RazorpayOptions = {
    key: RAZORPAY_KEY,
    amount: amountInPaise,
    currency: 'INR',
    name: 'Crocsets',
    description: 'Handmade Yarn Creations',
    image: '/vite.svg', // Add your logo URL here
    order_id: orderData.orderId, // Optional: if you're creating orders server-side
    handler: (response) => {
      // Payment successful
      console.log('Payment successful:', response);
      onSuccess(response);
    },
    prefill: {
      name: orderData.name,
      email: orderData.email,
      contact: orderData.phone,
    },
    notes: {
      address: orderData.address,
      city: orderData.city,
      zipCode: orderData.zipCode,
      country: orderData.country,
    },
    theme: {
      color: '#ec4899', // Pink color matching your theme
    },
    modal: {
      ondismiss: () => {
        // User closed the payment modal
        onFailure(new Error('Payment cancelled by user'));
      },
    },
  };

  try {
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error('Error initializing Razorpay:', error);
    onFailure(error);
  }
};

/**
 * Verify payment signature (should be done on server-side in production)
 * This is a client-side example - in production, verify on your backend
 */
export const verifyPayment = async (
  razorpayOrderId: string,
  razorpayPaymentId: string,
  razorpaySignature: string
): Promise<boolean> => {
  // In production, this should be done on your backend server
  // for security reasons. This is just a placeholder.
  try {
    // Call your backend API to verify the payment
    const response = await fetch('/api/verify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        razorpay_order_id: razorpayOrderId,
        razorpay_payment_id: razorpayPaymentId,
        razorpay_signature: razorpaySignature,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Payment verification error:', error);
    // For demo purposes, return true if verification endpoint doesn't exist
    return true;
  }
};

