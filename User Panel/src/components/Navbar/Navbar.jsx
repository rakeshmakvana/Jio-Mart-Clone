import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <>
            <div className='navbars'>
                <div className="container">
                    <div className="row">
                        <ul class="nav nav-underline">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/groceries">Groceries</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/fruits">Premium Fruits</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/kitchen-needs'>Home & Kitchen Needs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/fashion'>Fashion</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/electronics'>Electronics</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/jewellery'>Jewellery</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/home-improvement'>Home improvement</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/wellness'>Wellness</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='all-categories'>All Categories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Navbar