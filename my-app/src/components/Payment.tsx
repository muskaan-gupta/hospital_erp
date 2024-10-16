"use client"; // For state and event handling

import { useState } from 'react';

const PaymentPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount) {
      setErrorMessage('Amount is required.');
      return;
    }

    switch (paymentMethod) {
      case 'cash':
        console.log('Payment in cash accepted. Amount:', amount);
        break;
      case 'upi':
        if (!upiId) {
          setErrorMessage('UPI ID is required.');
          return;
        }
        console.log('Payment via UPI accepted. UPI ID:', upiId, 'Amount:', amount);
        break;
      case 'card':
        if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
          setErrorMessage('Card details are incomplete.');
          return;
        }
        console.log('Payment via Card accepted. Card Number:', cardDetails.number, 'Amount:', amount);
        break;
      default:
        setErrorMessage('Please select a payment method.');
        return;
    }

    setIsPaymentComplete(true);
    setErrorMessage('');
  };

  return (
    <div className="p-6">
      

      {/* Button to trigger modal */}
      <button
        onClick={() => setIsModalVisible(true)}
        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
      >
        Make a Payment
      </button>

      {/* Payment Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Make Payment</h2>

            {/* Error message */}
            {errorMessage && (
              <div className="bg-red-100 text-red-700 p-3 mb-4 rounded-md">
                {errorMessage}
              </div>
            )}

            {/* Payment Completed */}
            {isPaymentComplete ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
                Payment Successful!
              </div>
            ) : (
              <form onSubmit={handlePaymentSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Amount</label>
                  <input
                    type="number"
                    className="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Select Payment Method</label>
                  <select
                    className="border border-gray-300 rounded-md p-2 w-full"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  >
                    <option value="">Select Method</option>
                    <option value="cash">Cash</option>
                    <option value="upi">UPI</option>
                    <option value="card">Credit/Debit Card</option>
                  </select>
                </div>

                {/* Show additional fields based on the payment method */}
                {paymentMethod === 'upi' && (
                  <div className="mb-4">
                    <label className="block text-gray-700">UPI ID</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2 w-full"
                      placeholder="Enter UPI ID"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      required
                    />
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700">Card Number</label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        placeholder="Enter card number"
                        value={cardDetails.number}
                        onChange={(e) =>
                          setCardDetails({ ...cardDetails, number: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) =>
                          setCardDetails({ ...cardDetails, expiry: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">CVV</label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        placeholder="Enter CVV"
                        value={cardDetails.cvv}
                        onChange={(e) =>
                          setCardDetails({ ...cardDetails, cvv: e.target.value })
                        }
                        required
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="bg-teal-500 text-white w-full py-2 rounded-md hover:bg-teal-600"
                >
                  Pay Now
                </button>
              </form>
            )}

            {/* Close Modal Button */}
            <button
              onClick={() => setIsModalVisible(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
