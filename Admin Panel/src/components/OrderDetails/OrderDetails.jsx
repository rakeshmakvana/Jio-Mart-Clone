import { IoIosArrowForward } from 'react-icons/io'
import './OrderDetails.css'

const OrderDetails = () => {

    return (
        <>
            <div className='main-analytics'>
                <div className="w-100 p-4">
                    <div className='w-100 mb-2'>
                        <div className='w-100 main-a mb-2'>
                            <span>Orders <IoIosArrowForward /> Order Details</span>
                        </div>
                    </div>
                    <div className='m-4 p-2 d-flex flex-wrap ordt-box'>
                        <div className="col-6">
                            <div className="col-12 cart-box">
                                <div className='p-4'>
                                    <h3 className='w-100 d-flex justify-content-between'>
                                        Customer Order <span>₹114.00</span>
                                    </h3>
                                </div>
                                <div className="w-100 d-flex flex-wrap mb-4">
                                    <div className="col-2">
                                        <img src="https://www.jiomart.com/images/product/original/490001795/maaza-mango-drink-1-2-l-product-images-o490001795-p490001795-0-202301272130.jpg?im=Resize=(240,240)" alt="product" className='w-100' />
                                    </div>
                                    <div className="col-10">
                                        <h4 className='mb-2'>
                                            Maaza mango Drink 1.2 l
                                        </h4>
                                        <h3 className='mb-2'>
                                            ₹54.00 <span className='sp2'> (4%)</span>
                                        </h3>
                                        <h5>
                                            <span className='sp2'>Sold by :- </span>Reliance Retail
                                        </h5>
                                    </div>
                                </div>
                                <div className="w-100 d-flex flex-wrap mb-4">
                                    <div className="col-2">
                                        <img src="https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(240,240)" alt="product" className='w-100' />
                                    </div>
                                    <div className="col-10">
                                        <h4 className='mb-2'>
                                            Bharat Chana Dal 1 kg
                                        </h4>
                                        <h3 className='mb-2'>
                                            ₹60.00 <span className='sp2'> (1%)</span>
                                        </h3>
                                        <h5>
                                            <span className='sp2'>Sold by :- </span>Reliance Retail
                                        </h5>
                                    </div>
                                </div>
                                <div className='p-4 mt-3 ct-box w-100'>
                                    <h3 className='mb-3'>
                                        Payment Details
                                    </h3>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        MRP <span>₹135.00</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        Discount <span>(5%)</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        Delivery Fee <span className='text-success'>FREE</span>
                                    </h4>
                                    <span className='w-100 d-flex justify-content-between sp my-2'>
                                        Total <h3>₹114.00</h3>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-12 cart-box">
                                <div className='py-4 px-3'>
                                    <h3 className='w-100 d-flex justify-content-between'>
                                        Customer Information
                                    </h3>
                                </div>
                                <div className="w-100 d-flex flex-wrap ct-box px-3">
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        Name <span>rm king</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        Number <span>4536786756</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        Address <span>24,ak-road,mandir</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        Address2 <span>50,tk road,main road,surat</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        City <span>Surat</span>
                                    </h4>
                                    <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                        State <span>Gujrat</span>
                                    </h4>
                                </div>
                                <div className='p-4 mb-3'>
                                    <h3 className='w-100 d-flex justify-content-between mb-3'>
                                        Pay Conformation
                                    </h3>
                                    <span className='w-100 d-flex justify-content-between sp mb-2'>
                                        Payment :- Cash On Delivery
                                    </span>
                                    <span className='w-100 sp'>
                                        Response :- <span className='text-danger'>Panding</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default OrderDetails