import { IoIosArrowForward } from 'react-icons/io'
import './AddProduct.css'
import { PiFileJpgBold } from "react-icons/pi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbBrandBeats } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { CiDiscount1 } from "react-icons/ci";
import { FaBoxes } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAsync, updateAsync } from '../../services/Action/productAction';
import { useDropzone } from 'react-dropzone';
import { useLocation, useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const { products } = useSelector(state => state.productReducer);
    const [input, setInput] = useState({
        name: '',
        brand: '',
        price: '',
        discount: '',
        stock: '',
        category: '',
        subcategory: '',
        manufacturer: '',
        details: '',
        description: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state || {};


    const onDrop = useCallback((acceptedFiles) => {
        setImageFile(acceptedFiles[0]);
    }, []);
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop });
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({ ...input, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(updateAsync(id, input, imageFile));
        } else {
            dispatch(addAsync(input, imageFile));
        }
        setInput({
            name: '',
            brand: '',
            price: '',
            discount: '',
            stock: '',
            category: '',
            subcategory: '',
            manufacturer: '',
            details: '',
            description: ''
        });
        navigate('/products-list');
    }

    useEffect(() => {
        if (id) {
            const product = products.find(product => product.id === id);
            if (product) {
                setInput(product);
            }
        }
    }, [id, products]);

    return (
        <>
            <div className='main-analytics'>
                <div className='w-100 p-4'>
                    <div className='w-100 main-a mb-2'>
                        <span>Products <IoIosArrowForward /> {id ? 'Edit Product' : 'Add Product'}</span>
                    </div>
                    <div className='mt-4 form-box p-5 m-4'>
                        <form className='d-flex flex-wrap' onSubmit={handleSubmit}>
                            <div class="col-12 mb-4">
                                <label for="inputEmail4" class="form-label"><PiFileJpgBold className='mb-1' /> Product Image</label>
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <p className='dr-p w-100'>Drag 'n' drop some files here, or click to select files.</p>
                                </div>
                                <aside>
                                    <ul>{files}</ul>
                                </aside>
                            </div>
                            <div class="col-8 mb-4">
                                <label for="inputPassword4" class="form-label"><RiProductHuntLine className='mb-1' /> Product Name</label>
                                <input type="text" class="form-control" name='name' value={input.name} onChange={handleChange} />
                            </div>
                            <div class="col-4 mb-4">
                                <label for="inputPassword4" class="form-label"><TbBrandBeats className='mb-1' /> Product Brand</label>
                                <input type="text" class="form-control" name='brand' value={input.brand} onChange={handleChange} />
                            </div>
                            <div class="input-group mb-4 col-4">
                                <label for="inputPassword4" class="form-label w-100"><HiOutlineCurrencyRupee className='mb-1' /> Product Price</label>
                                <span class="input-group-text">₹</span>
                                <input type="number" class="form-control" name='price' value={input.price} onChange={handleChange} />
                                <span class="input-group-text">.00</span>
                            </div>
                            <div class="input-group mb-4 col-4">
                                <label for="inputPassword4" class="form-label w-100"><CiDiscount1 className='mb-1' /> Product Discount</label>
                                <input type="number" class="form-control" name='discount' value={input.discount} onChange={handleChange} />
                                <span class="input-group-text">%</span>
                            </div>
                            <div class="input-group mb-4 col-4">
                                <label for="inputPassword4" class="form-label w-100"><FaBoxes className='mb-1' /> Product Stock</label>
                                <input type="number" class="form-control" name='stock' value={input.stock} onChange={handleChange} />
                            </div>
                            <div class="input-group mb-4 col-6">
                                <label for="inputPassword4" class="form-label w-100"><MdCategory className='mb-1' /> Product Category</label>
                                <select class="form-select w-100 p-2" aria-label="Default select example" name='category' value={input.category} onChange={handleChange}>
                                    <option selected>Chooes Category</option>
                                    <option value="Groceries">Groceries</option>
                                    <option value="Premium Fruits">Premium Fruits</option>
                                    <option value="Home & Kitchen Needs">Home & Kitchen Needs</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Jewellery">Jewellery</option>
                                    <option value="Home improvement">Home improvement</option>
                                    <option value="Wellness">Wellness</option>
                                </select>
                            </div>
                            <div class="input-group mb-4 col-6">
                                <label for="inputPassword4" class="form-label w-100"><BiSolidCategoryAlt className='mb-1' /> Product Sub Category</label>
                                <select class="form-select w-100 p-2" aria-label="Default select example" name='subcategory' value={input.subcategory} onChange={handleChange}>
                                    <option selected>Chooes Sub Category</option>
                                    <option value="Cooking">Cooking</option>
                                    <option value="Food">Food</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Computer">Computer</option>
                                    <option value="Clothe">Clothe</option>
                                    <option value="Health">Health</option>
                                    <option value="Makeup">Makeup</option>
                                    <option value="Homemade">Homemade</option>
                                    <option value="Kitchen">Kitchen</option>
                                    <option value="Beauty">Beauty</option>
                                    <option value="Book">Book</option>
                                    <option value="Game">Game</option>
                                    <option value="Gift">Gift</option>
                                    <option value="Decoration">Decoration</option>
                                    <option value="Tech">Tech</option>
                                </select>
                            </div>
                            <div class="input-group mb-4 col-12">
                                <label for="inputPassword4" class="form-label w-100"><MdOutlineHomeWork className='mb-1' /> Product Manufacturer</label>
                                <input type="text" class="form-control" name='manufacturer' value={input.manufacturer} onChange={handleChange} />
                            </div>
                            <div class="input-group mb-4 col-12">
                                <label for="inputPassword4" class="form-label w-100"><TbListDetails className='mb-1' /> Product Details</label>
                                <textarea class="form-control" type='text' rows="3" name='details' value={input.details} onChange={handleChange} ></textarea>
                            </div>
                            <div class="input-group mb-4 col-12">
                                <label for="inputPassword4" class="form-label w-100"><BiDetail className='mb-1' /> Product Description</label>
                                <textarea class="form-control" type='text' rows="5" name='description' value={input.description} onChange={handleChange} ></textarea>
                            </div>
                            <div class="form-check col-12 pl-4 ml-3 mb-4">
                                <input class="form-check-input" type="checkbox" id="flexCheckChecked" required />
                                <label class="form-check-label" for="flexCheckChecked">
                                    I Accepted all Cokie and Conform to Lounch Product.
                                </label>
                            </div>
                            <div className='col-12'>
                                <button type='submit'>
                                    {id ? 'Edit Product' : 'Add Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AddProduct