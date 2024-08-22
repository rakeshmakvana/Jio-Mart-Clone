import { Link, useLocation } from 'react-router-dom'
import './ProductDetails.css'
import { IoIosArrowForward } from 'react-icons/io'
import logo from './logo.svg'
import { TiStarFullOutline } from "react-icons/ti";
import { BiSolidOffer } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";
import { useSelector } from 'react-redux';

const ProductDetails = () => {

    const { products } = useSelector(state => state.productReducer);
    const location = useLocation();
    const { id } = location.state || {};

    let filterProducts = products.filter((pro) => {
        if (id === pro.id) {
            return pro
        }
    });
    let filterProduct = filterProducts[0];

    return (
        <>
            <div className="container py-5 w-100">
                <div className="row">
                    <div className='w-100 gr-a mb-2'>
                        <Link to='/'>Home</Link> <span><IoIosArrowForward /> Product Details</span>
                    </div>
                    <div className='w-100 d-flex flex-wrap mt-4'>
                        <div className="col-5">
                            <div className='w-100 mb-3'>
                                <img src={logo} alt="logo" width={100} />
                            </div>
                            <div className='prdt-img text-center p-4 mb-4'>
                                <img src={filterProduct.imageUrl} alt="pr" className='w-100' />
                            </div>
                            <div className='prdt-btn'>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-6 pl-4">
                            <div className='w-100 prdt-txt pb-4'>
                                <h4>
                                    {filterProduct.brand}
                                </h4>
                                <h3>
                                    {filterProduct.name}
                                </h3>
                                <h2 className='mb-2'>
                                    <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><span><TiStarFullOutline /></span>
                                </h2>
                                <h5>
                                    M.R.P :- <span> ₹{filterProduct.price}.00</span> ({filterProduct.discount}%)
                                </h5>
                            </div>
                            <div className='w-100 prdt-ofr pb-4 mt-4'>
                                <h2>
                                    Offers
                                </h2>
                                <h3>
                                    <span><BiSolidOffer /></span> ADDITIONAL OFFERS
                                    <p className='mt-2'>Get 10% Cashback for your first Order.</p>
                                </h3>
                                <h3>
                                    <span><AiFillBank /></span> BANK OFFERS
                                    <p className='mt-2'>Get upto Rs.300* cashback on Min.Order Value of Rs.500 on using RuPay Credit Card on Paytm UPI. Min. Assured Cashback off.</p>
                                    <p>Get 5% Cashback in JioMart Wallet on using Reliance SBI Co-Branded Credit Card Payment.</p>
                                </h3>
                            </div>
                            <div className='w-100 prdt-dl pb-4 mt-4'>
                                <h2>
                                    Deliver to
                                </h2>
                                <h3 className='mt-3'>
                                    400020 ( Mumbai )
                                </h3>
                                <h3 className='mt-3'>
                                    <span>In Stock</span> Delivery by tomorrow
                                </h3>
                            </div>
                            <div className='w-100 prdt-sl pb-4 mt-4'>
                                <h2>
                                    Sold by
                                </h2>
                                <img src={logo} alt="logo" className='my-2' />
                            </div>
                            <div className='w-100 prdt-inf pb-3 mt-4'>
                                <h2>
                                    Product Information
                                </h2>
                                <h3 className='mt-3'>
                                    <span>Brand :- </span> {filterProduct.brand}
                                </h3>
                                <h3 className='mt-3'>
                                    <span>Details :- </span> {filterProduct.details}.
                                </h3>
                                <h3 className='mt-3'>
                                    <span>Manufacturer :- </span> {filterProduct.manufacturer}.
                                </h3>
                                <h3 className='mt-3'>
                                    <span>Description :- </span> {filterProduct.description}.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductDetails