import { Accordion } from 'react-bootstrap';
import './Sidebar.css';
import logo from './logo.svg';
import { IoHome } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { IoBag } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineAreaChart } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logOutAsync } from '../../services/Action/authAction';
import { useDispatch } from 'react-redux';

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || 'analytics');
    const [activeAccordion, setActiveAccordion] = useState(localStorage.getItem('activeAccordion') || '0');
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink]);

    useEffect(() => {
        localStorage.setItem('activeAccordion', activeAccordion);
    }, [activeAccordion]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleAccordionClick = (eventKey) => {
        setActiveAccordion(eventKey);
    };

    const handleLogOut = () => {
        dispatch(logOutAsync());
    }

    return (
        <>
            <div className='sidebar'>
                <div className='sd-logo d-flex align-items-center justify-content-center'>
                    <button className='logo-button'>
                        <img src={logo} alt="logo" />
                    </button>
                </div>
                <div className='navbar p-4'>
                    <Accordion activeKey={activeAccordion} onSelect={handleAccordionClick} flush className='w-100'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><IoHome className='mb-1 mr-1' /> Dashboard</Accordion.Header>
                            <Accordion.Body>
                                <Link className={activeLink === 'analytics' ? 'active-link' : ''} onClick={() => handleLinkClick('analytics')} to='/'>
                                    <AiOutlineAreaChart className='mb-1 mr-1' /> Analytics
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><MdSpaceDashboard className='mb-1 mr-1' /> Products</Accordion.Header>
                            <Accordion.Body>
                                <Link className={activeLink === 'add-product' ? 'active-link' : ''} onClick={() => handleLinkClick('add-product')} to='/add-product'>
                                    <FaRegSquarePlus className='mb-1 mr-1' /> Add Product
                                </Link>
                                <br />
                                <br />
                                <Link className={activeLink === 'products-list' ? 'active-link' : ''} onClick={() => handleLinkClick('products-list')} to='/products-list'>
                                    <FaRegListAlt className='mb-1 mr-1' /> Products List
                                </Link>
                                <br />
                                <br />
                                <Link className={activeLink === 'product-details' ? 'active-link' : ''} onClick={() => handleLinkClick('product-details')} to='/products-details'>
                                    <FiBox className='mb-1 mr-1' /> Product Details
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><RiShoppingCart2Fill className='mb-1 mr-1' /> Orders</Accordion.Header>
                            <Accordion.Body>
                                <Link className={activeLink === 'orders-list' ? 'active-link' : ''} onClick={() => handleLinkClick('orders-list')} to='/orders-list'>
                                    <FaRegListAlt className='mb-1 mr-1' /> Orders List
                                </Link>
                                <br />
                                <br />
                                <Link className={activeLink === 'order-details' ? 'active-link' : ''} onClick={() => handleLinkClick('order-details')} to='/order-details'>
                                    <IoBag className='mb-1 mr-1' /> Order Details
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><FaMoneyCheck className='mb-1 mr-1' /> Sales</Accordion.Header>
                            <Accordion.Body>
                                <Link className={activeLink === 'sales-list' ? 'active-link' : ''} onClick={() => handleLinkClick('sales-list')} to='/sales-list'>
                                    <FaRegListAlt className='mb-1 mr-1' /> Sales List
                                </Link>
                                <br />
                                <br />
                                <Link className={activeLink === 'sale-details' ? 'active-link' : ''} onClick={() => handleLinkClick('sale-details')} to='/sale-details'>
                                    <RiMoneyRupeeCircleLine className='mb-1 mr-1' /> Sale Details
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><ImUser className='mb-1 mr-1' /> Customers</Accordion.Header>
                            <Accordion.Body>
                                <Link className={activeLink === 'all-customers' ? 'active-link' : ''} onClick={() => handleLinkClick('all-customers')} to='/all-customers'>
                                    <LuUsers className='mb-1 mr-1' /> All Customers
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><IoSettings className='mb-1 mr-1' /> Settings</Accordion.Header>
                            <Accordion.Body>
                                <Link className={activeLink === 'profile' ? 'active-link' : ''} onClick={() => handleLinkClick('profile')} to='/'>
                                    <FaRegUserCircle className='mb-1 mr-1' /> Profile
                                </Link>
                                <br />
                                <br />
                                <Link className={activeLink === 'logout' ? 'active-link' : ''} onClick={() => handleLinkClick('logout')} to='/'>
                                    <button onClick={handleLogOut}>
                                        <RiLogoutBoxLine className='mb-1 mr-1' /> Logout
                                    </button>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
