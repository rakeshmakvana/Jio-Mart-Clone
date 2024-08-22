import { IoIosArrowForward } from 'react-icons/io'
import './ProductDetails.css'
import logo from './logo.svg'
import { TiStarFullOutline } from 'react-icons/ti'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletAsync, getAsync } from '../../services/Action/productAction'
import { useEffect } from 'react'

const ProductDetails = () => {

    const { products } = useSelector(state => state.productReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = location.state || {};

    let filterProducts = products.filter((pro) => {
        if (id === pro.id) {
            return pro
        }
    });
    let filterProduct = filterProducts[0];

    const handleEdit = (id) => {
        navigate('/add-product', { state: { id } })
    }

    const handleDelet = (id) => {
        dispatch(deletAsync(id))
    }

    useEffect(() => {
        dispatch(getAsync());
    }, [id])

    return (
        <>
            <div className='main-analytics'>
                <div className='w-100 p-4'>
                    <div className='w-100 main-a mb-2'>
                        <span>Products <IoIosArrowForward /> Product Details</span>
                    </div>
                    <div className='w-100 d-flex flex-wrap mb-5'>
                        {id ?
                            <>
                                <div className="col-5 mt-5">
                                    <div className='w-100 mb-3'>
                                        <img src={logo} alt="logo" width={100} />
                                    </div>
                                    <div className='prdt-img text-center p-4 mb-4'>
                                        <img src={filterProduct.imageUrl} alt="pr" className='w-100' />
                                    </div>
                                    <div className='prdt-btn text-center'>
                                        <button className='bg-success' onClick={() => handleEdit(filterProduct.id)}>Edit Product</button>
                                        <button className='bg-danger' onClick={() => handleDelet(filterProduct.id)}>Delete Product</button>
                                    </div>
                                </div>
                                <div className="col-6 pl-4 mt-5">
                                    <div className='w-100 prdt-txt pb-4 mt-2'>
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
                                    <div className='w-100 prdt-inf pb-3 mt-4'>
                                        <h2>
                                            Product Information
                                        </h2>
                                        <h3 className='mt-3'>
                                            <span>Brand :- </span> {filterProduct.brand}
                                        </h3>
                                        <h3 className='mt-3'>
                                            <span>Stock :- </span> {filterProduct.stock} available
                                        </h3>
                                        <h3 className='mt-3'>
                                            <span>Categories :- </span> {filterProduct.category}
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
                            </>
                            :
                            products.length > 0 ?
                                products.map((pr) => {
                                    return (<>
                                        <div className="col-5 mt-5">
                                            <div className='w-100 mb-3'>
                                                <img src={logo} alt="logo" width={100} />
                                            </div>
                                            <div className='prdt-img text-center p-4 mb-4'>
                                                <img src={pr.imageUrl} alt="pr" className='w-100' />
                                            </div>
                                            <div className='prdt-btn text-center'>
                                                <button className='bg-success'>Edit Product</button>
                                                <button className='bg-danger'>Delete Product</button>
                                            </div>
                                        </div>
                                        <div className="col-6 pl-4 mt-5">
                                            <div className='w-100 prdt-txt pb-4 mt-2'>
                                                <h4>
                                                    {pr.brand}
                                                </h4>
                                                <h3>
                                                    {pr.name}
                                                </h3>
                                                <h2 className='mb-2'>
                                                    <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><span><TiStarFullOutline /></span>
                                                </h2>
                                                <h5>
                                                    M.R.P :- <span> ₹{pr.price}.00</span> ({pr.discount}%)
                                                </h5>
                                            </div>
                                            <div className='w-100 prdt-inf pb-3 mt-4'>
                                                <h2>
                                                    Product Information
                                                </h2>
                                                <h3 className='mt-3'>
                                                    <span>Brand :- </span> {pr.brand}
                                                </h3>
                                                <h3 className='mt-3'>
                                                    <span>Stock :- </span> {pr.stock} available
                                                </h3>
                                                <h3 className='mt-3'>
                                                    <span>Categories :- </span> {pr.category}
                                                </h3>
                                                <h3 className='mt-3'>
                                                    <span>Details :- </span> {pr.details}.
                                                </h3>
                                                <h3 className='mt-3'>
                                                    <span>Manufacturer :- </span> {pr.manufacturer}.
                                                </h3>
                                                <h3 className='mt-3'>
                                                    <span>Description :- </span> {pr.description}.
                                                </h3>
                                            </div>
                                        </div>
                                    </>)
                                })
                                :
                                <div className='col-12 my-3 text-left'>
                                    <h2 className='text-danger '>
                                        No Product Details Found, Please Add Product.
                                    </h2>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductDetails