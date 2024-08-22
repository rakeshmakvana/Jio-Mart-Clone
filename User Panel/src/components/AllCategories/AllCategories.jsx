import './AllCategories.css'
import './../Groceries/Groceries.css'
import logo from './../Groceries/logo.svg'
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAsync } from '../../services/Action/productAction';
import { addAsync } from '../../services/Action/cartAction';

const AllCategories = () => {

    const { products } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate('/product-details', { state: { id } })
    }

    const handleAddToCart = (data) => {
        dispatch(addAsync(data));
    }

    useEffect(() => {
        dispatch(getAsync());
    }, [])

    return (
        <>
            <div className="container my-5 w-100">
                <div className="row">
                    <div className='w-100 gr-a mb-2'>
                        <Link to='/'>Home</Link> <span><IoIosArrowForward /> All Categories</span>
                    </div>
                    <div className='w-100 d-flex flex-wrap gr-pr p-0 mb-4'>
                        <div className="col-3 mt-4 p-0">
                            <div className='cat-box p-3'>
                                <h1 className='mb-4'>
                                    Filters
                                </h1>
                                <h2 className='mb-3'>
                                    Categories
                                </h2>
                                <button className='text-left mb-3'>Groceries</button>
                                <button className='text-left mb-3'>Premium Fruits</button>
                                <button className='text-left mb-3'>Home & Kitchen Needs</button>
                                <button className='text-left mb-3'>Fashion</button>
                                <button className='text-left mb-3'>Electronics</button>
                                <button className='text-left mb-3'>Jewellery</button>
                                <button className='text-left mb-3'>Home improvement</button>
                                <button className='text-left mb-4'>Wellness</button>
                                <h2 className='mb-3'>
                                    Sub Categories
                                </h2>
                                <button className='text-left mb-3'>Mobile</button>
                                <button className='text-left mb-3'>Computer</button>
                                <button className='text-left mb-3'>Cooking</button>
                                <button className='text-left mb-3'>Food</button>
                                <button className='text-left mb-3'>Health</button>
                                <button className='text-left mb-4'>Clothe</button>
                                <button className='text-left mb-4'>Makeup</button>
                                <button className='text-left mb-4'>Homemade</button>
                                <button className='text-left mb-4'>Kitchen</button>
                                <button className='text-left mb-4'>Beauty</button>
                                <button className='text-left mb-4'>Book</button>
                                <button className='text-left mb-4'>Game</button>
                                <button className='text-left mb-4'>Gift</button>
                                <button className='text-left mb-4'>Decoration</button>
                                <button className='text-left mb-4'>Tech</button>
                                <h2 className='mb-3'>
                                    Price
                                </h2>
                                <button className='text-left mb-4'>Low to High</button>
                                <h2 className='mb-3'>
                                    Discount
                                </h2>
                                <button className='text-left mb-4'>Top Offers</button>
                            </div>
                        </div>
                        <div className="col-9 d-flex flex-wrap">
                            {products.length > 0 ?
                                products.map((data) => {
                                    return (<div className="col-4 mt-4">
                                        <div className='gr-btn'>
                                            <button className='px-4 pt-4 text-left' onClick={() => handleDetails(data.id)}>
                                                <img src={data.imageUrl} alt="img" className='mb-3 gr-img' />
                                                <img src={logo} alt="logo" width={100} className='pl-2 mb-2' />
                                                <h4 className='mb-3 pl-2'>{data.name}</h4>
                                                <h3 className='mb-3 pl-2'>
                                                    ₹{data.price}.00
                                                </h3>
                                            </button>
                                            <button className='w-100 text-center px-3 pb-4'>
                                                <button onClick={()=>handleAddToCart(data)}>Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus className='mb-1 ml-5' /></button>
                                            </button>
                                        </div>
                                    </div>)
                                })
                                :
                                <div className='col-12 my-3 text-left'>
                                    <h2 className='text-danger '>
                                        No Product Available.
                                    </h2>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AllCategories