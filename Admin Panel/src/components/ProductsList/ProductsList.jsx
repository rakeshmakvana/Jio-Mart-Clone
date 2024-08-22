import { IoIosArrowForward } from 'react-icons/io'
import logo from './logo.svg'
import './ProductsList.css'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletAsync, getAsync } from '../../services/Action/productAction'
import { useEffect } from 'react'

const ProductsList = () => {

    const { products } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate('/products-details', { state: { id } })
    }

    const handleEdit = (id) => {
        navigate('/add-product', { state: { id } })
    }

    const handleDelet = (id) => {
        dispatch(deletAsync(id));
    }

    useEffect(() => {
        dispatch(getAsync());
    }, [])

    return (
        <>
            <div className='main-analytics'>
                <div className='w-100 p-4'>
                    <div className='w-100 main-a mb-2'>
                        <span>Products <IoIosArrowForward /> Products List</span>
                    </div>
                    <div className='w-100 my-3 d-flex flex-wrap p-0'>
                        {products.length > 0 ?
                            products.map((data) => {
                                return (<div className="col-3 mt-4">
                                    <div className='gr-btn'>
                                        <button className='px-4 pt-4 text-left' onClick={() => handleDetails(data.id)}>
                                            <img src={data.imageUrl} alt="img" className='mb-3 gr-img' />
                                            <img src={logo} alt="logo" width={100} className='pl-2 mb-2' />
                                            <h4 className='mb-3 pl-2'>{data.name}</h4>
                                            <h3 className='pl-2 mb-3'>
                                                ₹{data.price}.00
                                            </h3>
                                        </button>
                                        <button className='w-100 text-center px-3 pb-4'>
                                            <button className='bg-primary' onClick={() => handleEdit(data.id)}><BiEdit className='mb-1' /></button>
                                            <button className='bg-danger' onClick={() => handleDelet(data.id)}><MdDelete className='mb-1' /></button>
                                        </button>
                                    </div>
                                </div>)
                            })
                            :
                            <div className='col-12 my-3 text-left'>
                                <h2 className='text-danger '>
                                    No Product Found, Please Add Product.
                                </h2>
                            </div>}
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductsList