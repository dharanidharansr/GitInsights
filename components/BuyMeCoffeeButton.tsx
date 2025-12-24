'use client'

import React, { useState } from "react";
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

const BuyMeCoffeeButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 50 }),
      });

      const { orderId, amount } = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: amount,
        currency: "INR",
        name: "Buy Me a Coffee",
        description: "Support GitInsights ☕",
        order_id: orderId,
        handler: function (response: any) {
          verifyPayment(response);
        },
        theme: { color: "#3B82F6" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (paymentData: any) => {
    try {
      const response = await fetch("/api/payment/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });
      
      if (response.ok) {
        alert("Thank you for your support! ☕");
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <motion.button
        onClick={handlePayment}
        disabled={loading}
        className="relative overflow-hidden px-5 py-2.5 rounded-xl font-mono font-semibold flex items-center gap-2 transition-all duration-300 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-hero-blue hover:bg-neutral-900/80 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
        }}
      >
        {/* Animated gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{
            background: [
              "linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
              "linear-gradient(225deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
              "linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
            ],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        {/* Coffee icon */}
        <motion.div
          animate={loading ? { rotate: 360 } : {}}
          transition={{
            duration: 1,
            repeat: loading ? Infinity : 0,
            ease: "linear",
          }}
        >
          <Coffee size={18} className="text-hero-blue" />
        </motion.div>

        {/* Button text - hidden on mobile */}
        <span className="relative z-10 text-white text-sm hidden md:inline">
          {loading ? "Brewing..." : "Buy Coffee"}
        </span>
      </motion.button>
    </motion.div>
  );
};

export default BuyMeCoffeeButton;
