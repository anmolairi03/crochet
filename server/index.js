import express from "express";
import Razorpay from "razorpay";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_S1epB425m0EfN2",   // your key
  key_secret: "Bfy9hS2TppE10z0VO80zjLRK",      // your secret
});

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
    });

    res.json(order);
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ error: "Order creation failed" });
  }
});

app.listen(5000, () => {
  console.log("🔥 Server running on http://localhost:5000");
});
