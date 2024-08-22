import { Button, Container, Dropdown, Form, Nav, Navbar, Row, Spinner } from "react-bootstrap"
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import logo from './logo.svg'
import './Header.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut, logOutAsync } from "../../services/Action/authAction";
import { useEffect, useState } from "react";

const Header = () => {

    const { isLogin } = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignIn = () => {
        navigate('/signin');
    }

    const handleLogOut = () => {
        dispatch(logOutAsync());
    }

    const handleCart = () => {
        navigate('/cart');
    }

    const user = JSON.parse(localStorage.getItem('jiouser'));
    useEffect(() => {
        if (user) {
            dispatch(logIn(user));
        } else {
            dispatch(logOut());
        }
    }, [dispatch]);

    return (
        <>
            <Navbar expand="lg" className="header py-3">
                <Container>
                    <Row className="w-100">
                        <Navbar.Brand href="#" className="col-2 m-0">
                            <img src={logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="d-flex flex-wrap col-10 p-0">
                            <Nav className="my-2 my-lg-0 col-4 p-0">
                                <Button className="header-btn"><FaLocationDot /> Deliver to Mumbai 400020</Button>
                            </Nav>
                            <Form className="d-flex col-6">
                                <Form.Control type="search" placeholder="🔍 Search JioMart" className="header-src me-2 p-3" />
                            </Form>
                            <Nav className="my-2 my-lg-0 col-2 p-0">
                                <Button className="header-btn" onClick={handleCart}><span className="header-sp"><FaCartShopping /></span></Button>
                                {!isLogin ?
                                    <Button className="header-btn pl-3" onClick={handleSignIn}><span className="header-sp"><FaCircleUser /></span> Sign In</Button>
                                    :
                                    <Dropdown className="dr-btn">
                                        <Dropdown.Toggle id="dropdown-basic" className="dr2-img">
                                            <img src={user.photoURL} alt="profile" width={30} />
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
                                                    <button type='button' onClick={handleLogOut}>Sign Out</button>
                                                </div>
                                            </Dropdown.ItemText>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Container>
            </Navbar>
        </>
    )

}

export default Header