import { IoIosArrowForward } from 'react-icons/io'
import { MdRemoveRedEye } from "react-icons/md";
import './OrdersList.css'

const OrdersList = () => {

    return (
        <>
            <div className='main-analytics'>
                <div className="w-100 p-4">
                    <div className='w-100 mb-2'>
                        <div className='w-100 main-a mb-2'>
                            <span>Orders <IoIosArrowForward /> Orders List</span>
                        </div>
                    </div>
                    <div className='m-4 p-1'>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">MRP</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <td>1</td>
                                    <td>Chana Dal</td>
                                    <td>RM</td>
                                    <td>₹60.00</td>
                                    <td>4536786756</td>
                                    <td>24,ak-road,surat-395006.</td>
                                    <td><button><MdRemoveRedEye /></button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Chana Dal</td>
                                    <td>RM</td>
                                    <td>₹60.00</td>
                                    <td>986786986</td>
                                    <td>24,ak-road,surat-395006.</td>
                                    <td><button><MdRemoveRedEye /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}

export default OrdersList