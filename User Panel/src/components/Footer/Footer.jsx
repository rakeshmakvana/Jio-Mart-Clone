import './Footer.css'
import icon1 from './icon-1.svg'
import icon2 from './icon-2.svg'
import logo from './ft-logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <div className='footer p-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className='ft-h4'>
                                <h4>
                                    All Categories
                                </h4>
                            </div>
                            <div className='ft-a'>
                                <Link to='/groceries'>
                                    Grocery
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='/electronics'>
                                    Electronics
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='/fashion'>
                                    Fashion
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='/kitchen-needs'>
                                    Home & Kitchen
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='/fruits'>
                                    Premium Fruits
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='/wellness'>
                                    Books
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='/home-improvement'>
                                    Furniture
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='ft-h4'>
                                <h4>
                                    Popular Categories
                                </h4>
                            </div>
                            <div className='ft-a'>
                                <Link to='all-categories'>
                                    Staples
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='all-categories'>
                                    Beverages
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='all-categories'>
                                    Personal Care
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='all-categories'>
                                    Home Care
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='all-categories'>
                                    Fruits & Vegetables
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='all-categories'>
                                    Baby Care
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='all-categories'>
                                    Snacks & Branded Foods
                                </Link>
                            </div>
                            <div className='ft-a'>
                                <Link to='all-categories'>
                                    Dairy & Bakery
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className='ft-h4'>
                                <h4>
                                    Custmr Account
                                </h4>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    My Account
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    My Orders
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    Wishlist
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    Payment Methods
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    Delivery Addresses
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    JioMart Wallet
                                </a>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className='ft-h4'>
                                <h4>
                                    Help & Support
                                </h4>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    About Us
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    FAQ
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    Terms & Conditions
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    E-waste Policy
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    Cancellation & Return Policy
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    Shipping & Delivery Policy
                                </a>
                            </div>
                            <div className='ft-a'>
                                <a href="#">
                                    AC Installation by resQ
                                </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='ft-h3'>
                                <h3>
                                    Contact Us
                                </h3>
                            </div>
                            <div className='ft-p'>
                                <p>
                                    WhatsApp us: 70003 70003
                                </p>
                            </div>
                            <div className='ft-p'>
                                <p>
                                    Call us: 1800 890 1222
                                </p>
                            </div>
                            <div className='ft-p'>
                                <p>
                                    8:00 AM to 8:00 PM, 365 days
                                </p>
                            </div>
                            <div className='ft-p my-4'>
                                <p>
                                    Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the website, please email us on cs@jiomart.com
                                </p>
                            </div>
                            <div className='ft-h3'>
                                <h3>
                                    Download the app
                                </h3>
                            </div>
                            <div className='ft-img'>
                                <img src={icon1} alt="icon1" className='mr-2' />
                                <img src={icon2} alt="icon2" className='ml-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border p-3'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className='col-6 d-flex flex-wrap align-items-center'>
                            <div>
                                <img src={logo} alt="logo" width={30} />
                            </div>
                            <div className='ft-h5 ml-3'>
                                <h5>© 2024 All rights reserved. Reliance Retail Ltd.</h5>
                            </div>
                        </div>
                        <div className='col-6 ft-h5 text-right'>
                            <h5>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer