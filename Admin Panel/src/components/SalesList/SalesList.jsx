import { IoIosArrowForward } from 'react-icons/io'
import { MdRemoveRedEye } from "react-icons/md";

const SalesList = () => {

    return (
        <>
            <div className='main-analytics'>
                <div className="w-100 p-4">
                    <div className='w-100 mb-2'>
                        <div className='w-100 main-a mb-2'>
                            <span>Sales <IoIosArrowForward /> Sales List</span>
                        </div>
                    </div>
                    <div className='m-4 p-1'>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">MRP</th>
                                    <th scope="col">Pay</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <td>1</td>
                                    <td>Chana Dal</td>
                                    <td>RM</td>
                                    <td>rm@gmail.com</td>
                                    <td>₹60.00</td>
                                    <td>Conform</td>
                                    <td><button><MdRemoveRedEye /></button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Chana Dal</td>
                                    <td>RM</td>
                                    <td>rm@gmail.com</td>
                                    <td>₹60.00</td>
                                    <td>Conform</td>
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

export default SalesList