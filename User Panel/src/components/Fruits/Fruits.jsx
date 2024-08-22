import './../Groceries/Groceries.css'
import logo from './../Groceries/logo.svg'
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAsync } from '../../services/Action/productAction';
import { useDispatch, useSelector } from 'react-redux';

const Fruits = () => {

    const { products } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let productsFilter = products.filter((product) => {
        if (product.category == 'Premium Fruits') {
            return product
        }
    })

    const handleDetails = (id) => {
        navigate('/product-details', { state: { id } })
    }

    useEffect(() => {
        dispatch(getAsync());
    }, [])

    return (
        <>
            <div className="container my-5 w-100">
                <div className="row">
                    <div className='w-100 gr-a mb-2'>
                        <Link to='/'>Home</Link> <span><IoIosArrowForward /> Premium Fruits</span>
                    </div>
                    <div className='w-100 d-flex flex-wrap gr-pr p-0 mb-4'>
                        {productsFilter.length > 0 ?
                            productsFilter.map((data) => {
                                return (<div className="col-3 mt-4">
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
                                            <button>Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPlus className='mb-1 ml-5' /></button>
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
        </>
    )

}

export default Fruits