import { IoIosArrowForward } from 'react-icons/io'
import { MdRemoveRedEye } from "react-icons/md";

const Customers = () => {

    return (
        <>
            <div className='main-analytics'>
                <div className="w-100 p-4">
                    <div className='w-100 mb-2'>
                        <div className='w-100 main-a mb-2'>
                            <span>Customers <IoIosArrowForward /> All Customers</span>
                        </div>
                    </div>
                    <div className='m-4 p-1'>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <td>1</td>
                                    <td>RM</td>
                                    <td>rm@gmail.com</td>
                                    <td>987897867</td>
                                    <td>ak-road, surat-395006</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>RM</td>
                                    <td>rm@gmail.com</td>
                                    <td>987897867</td>
                                    <td>ak-road, surat-395006</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Customers