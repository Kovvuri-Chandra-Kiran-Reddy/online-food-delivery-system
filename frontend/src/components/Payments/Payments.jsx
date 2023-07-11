// import React, { useEffect, useState } from 'react';
// import './Payments.css';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Payments = () => {
//     const [cardNumber, setCardNumber] = useState('');
//     const [expiryDate, setExpiryDate] = useState('');
//     const [cvv, setCvv] = useState('');
//     const [totalAmount, setTotalAmount] = useState(0);
//     const location = useLocation();
//     const [dummy, setDummy] = useState(false);
//     console.log("out L ", location)
//     const navigate = useNavigate();
//     // const amount = useLocation();



//     const handleCardNumberChange = (event) => {
//         setCardNumber(event.target.value);
//     };

//     const handleExpiryDateChange = (event) => {
//         setExpiryDate(event.target.value);
//     };

//     const handleCvvChange = (event) => {
//         setCvv(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Perform payment processing logic here
//         // You can send the card number, expiry date, and cvv to a server for processing
//         console.log('Payment submitted');
//     };

//     // useEffect(() => {
//     //     console.log(location)
//     //     setDummy(!dummy)
//     //     // navigate(1);
//     //     // setTotalAmount(location.state.totalCost)
//     // }, [])

//     return (
//         <div class="PaymentPage">
//             <h1>Payment Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Card Number:
//                     <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Expiry Date:
//                     <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
//                 </label>
//                 <br />
//                 <label>
//                     CVV:
//                     <input type="text" value={cvv} onChange={handleCvvChange} />
//                 </label>
//                 <label>
//                     Amount:
//                     <input type="text" disabled value={location.state !== null ? location.state.f : '000'} />
//                 </label>

//                 <br />
//                 <button type="submit">Submit Payment</button>
//                 {dummy ? setDummy(!dummy) : ''}
//             </form>
//         </div>
//     );
// };

// export default Payments;

// paymentsPage.js (React component)
import React, { useState } from 'react';
import './Payments.css'

const Payments = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();

        // Simulating payment processing delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulating successful payment response
        setPaymentStatus('success');
        // Resetting form values
        setCardNumber('');
        setExpiryDate('');
        setCvv('');

    }


    return (
        <div class="containerrrr">
            <h2>Payment Information</h2>
            <p>We accept Credit and Debit Cards from Visa, Mastercard, Rupay, Sodexo, American Express, Maestro, Diners & Discover.</p>
            {paymentStatus === 'success' && (
                <div className="success-message">
                    Payment Successful! Thank you for your purchase.
                </div>
            )}
            <br></br>
            <form onSubmit={handlePaymentSubmit}>
                <div>
                    <input
                        type="checkbox"
                        id="cardType"
                        value="credit"
                    />
                    Credit Card
                    <input style={{ marginLeft: "7%" }}
                        type="checkbox"
                        id="cardType"
                        value="debit"
                    />
                    Debit Card
                </div>
                <br></br>
                <div>
                    <label htmlFor="cardName" className='fff'>Name on Card:</label>
                    <input
                        type="text"
                        id="cardName"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input style={{ width: "15%", marginRight: "2%" }}
                        type="text"
                        maxlength="4"
                        id="cardNumber"
                        required
                    />
                    <span style={{ fontSize: "150%" }}>-</span>
                    <input style={{ width: "15%", marginLeft: "2%", marginRight: "2%" }}
                        type="text"
                        maxlength="4"
                        id="cardNumber"
                        required
                    />
                    <span style={{ fontSize: "150%" }}>-</span>
                    <input style={{ width: "15%", marginLeft: "2%", marginRight: "2%" }}
                        type="text"
                        maxlength="4"
                        id="cardNumber"
                        required
                    />
                    <span style={{ fontSize: "150%" }}>-</span>
                    <input style={{ width: "15%", marginLeft: "2%" }}
                        type="text"
                        maxlength="4"
                        id="cardNumber"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input style={{ width: "10%" }}
                        type="text"
                        id="expiryDate"
                        maxlength="2"
                        required
                    />
                    <span style={{ fontSize: "150%", marginLeft: "2%", marginRight: "2%" }}>/</span>
                    <input style={{ width: "10%" }}
                        type="text"
                        id="expiryDate"
                        maxlength="2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cvv">CVV:</label>
                    <input style={{ width: "15%" }}
                        type="password"
                        id="cvv"
                        value={cvv}
                        maxlength="3"
                        onChange={(e) => setCvv(e.target.value)}
                        required
                    />
                </div>
                <br></br>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default Payments
