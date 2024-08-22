import { Button, Dropdown, Form, Nav } from 'react-bootstrap'
import './Header.css'
import { IoMdNotifications } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { logOutAsync } from '../../services/Action/authAction';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('jiouser2'));

    const handleLogOut = () => {
        dispatch(logOutAsync());
    }

    return (
        <>
            <div className="header d-flex flex-wrap align-items-center">
                <div className='hd-inp col-6'>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="🔍 Search JioMart" className="header-src me-2 p-3" />
                    </Form>
                </div>
                <div className='hd-btn col-6 d-flex flex-wrap justify-content-end'>
                    <Button className="header-btn"><span className="header-sp"><BiWorld /></span></Button>
                    <Button className="header-btn"><span className="header-sp"><IoMdNotifications /></span></Button>
                    <Dropdown className="dr-btn w-25">
                        <Dropdown.Toggle id="dropdown-basic" className="dr2-img p-0">
                            <img src={user.photoURL} alt="profile" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.ItemText>
                                <div className='d-flex flex-wrap w-100'>
                                    <div className='col-12 text-center mt-3 dr-img'>
                                        <img src={user.photoURL} alt="profile" />
                                    </div>
                                    <div className='dr-h4 col-12 text-center mt-3'>
                                        <h4>{user.displayName}</h4>
                                    </div>
                                    <div className='dr-h5 col-12 text-center'>
                                        <h5>{user.email}</h5>
                                    </div>
                                </div>
                            </Dropdown.ItemText>
                            <Dropdown.ItemText>
                                <div className='w-100 text-center dr2-btn mb-3'>
                                    <button type='button'>Profile</button>
                                </div>
                                <div className='w-100 text-center dr2-btn mb-3'>
                                    <Link to='/'>
                                        <button type='button' onClick={handleLogOut}>Sign Out</button>
                                    </Link>
                                </div>
                            </Dropdown.ItemText>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </>
    )

}

export default Header