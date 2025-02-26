import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RazorpayPayment.css"; // Custom CSS for additional styling

const RazorpayPayment = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const payNow = async () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      setLoading(true);
      // Create an order on the backend
      const response = await fetch("http://localhost:8080/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          currency: "INR",
          receipt: "receipt#1",
        }),
      });

      const order = await response.json();

      const options = {
        key: "rzp_test_wBrQr87m3vtD3z", // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Child Home Adoption",
        description: "Donation for Child Home Adoption",
        order_id: order.id,
        callback_url: "http://localhost:8080/api/payment-success",
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
        handler: async function (response) {
          try {
            const verificationResponse = await fetch(
              "http://localhost:8080/api/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );
            const verificationResult = await verificationResponse.json();

            if (verificationResult.status === "ok") {
              window.location.href = "/payment-success";
            } else {
              alert("Payment verification failed");
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Error verifying payment");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Error initiating payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm payment-card">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">
            Support a Child's Future
          </h1>
          <p className="text-center text-muted">
            Your contribution can make a difference.
          </p>
          <form id="payment-form">
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount (INR):
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
                placeholder="Enter amount in INR"
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={payNow}
                className="btn btn-primary btn-lg w-100 pay-button"
                disabled={loading}
              >
                {loading ? "Processing..." : "Donate Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RazorpayPayment;
