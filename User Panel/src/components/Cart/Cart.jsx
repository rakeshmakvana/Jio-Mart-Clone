import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { clear, removeAsync, setAsync, incrementQuantity, decrementQuantity } from '../../services/Action/cartAction';
import { getAsync } from '../../services/Action/productAction';

const Cart = () => {
    const { cartItems } = useSelector(state => state.cartReducer);
    const { user } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const [key, setKey] = useState('cart');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [upiId, setUpiId] = useState('');
    const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });

    useEffect(() => {
        if (user) {
            dispatch(setAsync());
        }
    }, [dispatch, user]);

    useEffect(() => {
        dispatch(getAsync());
    }, [dispatch]);

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value);
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment Method:', paymentMethod);
        if (paymentMethod === 'UPI') {
            console.log('UPI ID:', upiId);
        } else if (paymentMethod === 'Card') {
            console.log('Card Details:', cardDetails);
        }
        alert('Order Confirmed');
        dispatch(clear());
    };

    const handleIncrementQuantity = (productId) => {
        dispatch(incrementQuantity(productId));
    };

    const handleDecrementQuantity = (productId) => {
        dispatch(decrementQuantity(productId));
        const item = cartItems.find(item => item.id === productId);
        if (item.quantity === 1) {
            dispatch(removeAsync(productId));
        }
    };

    if (!user) {
        return <div>Please log in to view your cart</div>;
    }

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container">
            <div className="row py-4">
                <div className="w-100 cr-h2">
                    <h2>My Cart</h2>
                </div>
                <div className='w-100 d-flex flex-wrap my-4 mb-5 align-items-start'>
                    <div className="cart-box col-8">
                        <div className='p-4'>
                            <h3 className='w-100 d-flex justify-content-between pb-2'>
                                Hyperlocal Basket <span>₹{calculateTotalPrice()}</span>
                            </h3>
                            {cartItems.length > 0 ? cartItems.map((item) => (
                                <div key={item.id} className="w-100 d-flex flex-wrap my-4">
                                    <div className="col-2">
                                        <img src={item.imageUrl} alt="product" className='w-100' />
                                    </div>
                                    <div className="col-10">
                                        <h4 className='mb-2'>{item.name}</h4>
                                        <h3 className='mb-2'>
                                            ₹{item.price} <span className='sp2'> ({item.discount}%)</span>
                                        </h3>
                                        <h5>
                                            <span className='sp2'>Sold by :- </span>Reliance Retail
                                        </h5>
                                    </div>
                                    <div className='col-12 text-right'>
                                        <button className='mx-2' onClick={() => handleDecrementQuantity(item.id)}>-</button>
                                        <span className='sp'>{item.quantity}</span>
                                        <button className='mx-2' onClick={() => handleIncrementQuantity(item.id)}>+</button>
                                    </div>
                                </div>
                            )) : (
                                <h3>No items in the cart</h3>
                            )}
                        </div>
                    </div>
                    <div className="col-4 px-4">
                        <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                            <Tab eventKey="cart" title="Cart">
                                <div className='p-4 mt-3 ct-box'>
                                    <h3 className='mb-3'>Payment Details</h3>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        MRP <span>₹{calculateTotalPrice()}</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        Discount <span>(5%)</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        Delivery Fee <span className='text-success'>FREE</span>
                                    </h4>
                                    <span className='w-100 d-flex justify-content-between sp my-2'>
                                        Total <h3>₹{calculateTotalPrice()}</h3>
                                    </span>
                                    <button className='chek-btn mt-3' onClick={() => setKey('review')}>Place Order</button>
                                </div>
                            </Tab>
                            <Tab eventKey="review" title="Review">
                                <div className='p-4 mt-3 ad-box'>
                                    <h3 className='mb-3'>Address Information</h3>
                                    <form className="d-flex flex-wrap w-100" onSubmit={handleSubmit}>
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Mobile Number</label>
                                            <input type="number" className="form-control" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Address</label>
                                            <textarea type="text" className="form-control" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Address 2</label>
                                            <textarea type="text" className="form-control" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label className="form-label">State</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <button type="submit" className='col-12 mt-2 chek-btn' onClick={() => setKey('payment')}>
                                            Save Address
                                        </button>
                                    </form>
                                </div>
                            </Tab>
                            <Tab eventKey="payment" title="Payment">
                                <div className='p-4 mt-3 ad-box'>
                                    <h3 className='mb-3'>Secure Payment</h3>
                                    <form className="d-flex flex-wrap w-100" onSubmit={handleSubmit}>
                                        <div className="form-check w-100">
                                            <input className="form-check-input" type="radio" id="flexRadioDefault1" name='paymentMethod' value='CashOnDelivery' onChange={handlePaymentChange} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Cash On Delivery
                                            </label>
                                        </div>
                                        <div className="form-check w-100">
                                            <input className="form-check-input" type="radio" id="flexRadioDefault2" name='paymentMethod' value='UPI' onChange={handlePaymentChange} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                UPI
                                            </label>
                                        </div>
                                        {paymentMethod === 'UPI' && (
                                            <div className="w-100 mb-3">
                                                <label htmlFor="upiId">UPI ID</label>
                                                <input type="text" id="upiId" name="upiId" className="form-control" value={upiId} onChange={handleUpiIdChange} />
                                            </div>
                                        )}
                                        <div className="form-check w-100">
                                            <input className="form-check-input" type="radio" id="flexRadioDefault3" name='paymentMethod' value='Card' onChange={handlePaymentChange} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                Card
                                            </label>
                                        </div>
                                        {paymentMethod === 'Card' && (
                                            <div className="w-100 mb-3">
                                                <label htmlFor="cardNumber">Card Number</label>
                                                <input type="text" id="cardNumber" name="number" className="form-control mb-2" value={cardDetails.number} onChange={handleCardDetailsChange} />
                                                <label htmlFor="expiry">Expiry Date</label>
                                                <input type="text" id="expiry" name="expiry" className="form-control mb-2" value={cardDetails.expiry} onChange={handleCardDetailsChange} />
                                            </div>
                                        )}
                                        <button type="submit" className="chek-btn mt-3">Submit Payment</button>
                                    </form>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
