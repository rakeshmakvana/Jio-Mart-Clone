import { useState } from 'react';
import './SignIn.css'
import logo from './logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInAsync } from '../../services/Action/authAction';
import { Alert, Button } from 'react-bootstrap';

const SignIn = () => {

    const [show, setShow] = useState(false);
    const { error, isLoading } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({ ...input, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logInAsync(input));
        setInput({
            email: '',
            password: ''
        });
        setShow(true)
    }

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center align-items-center vh-100 w-100">
                <div className="signin-box d-flex flex-wrap align-items-start">
                    <div className='col-12 d-flex flex-wrap mt-5 align-items-center'>
                        <div className='col-10 si-h'>
                            <h2 className='mb-3'>
                                Sign In
                            </h2>
                            <h4>
                                Verify your Saler account to access your <span>JioMart</span> account
                            </h4>
                        </div>
                        <div className='col-2 si-img p-0'>
                            <img src={logo} alt="logo" width={50} />
                        </div>
                    </div>
                    <div className='col-12 si-btn'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-3 px-2">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={input.email} onChange={(e) => handleChange(e)} required />
                            </div>
                            <div className="mb-4 px-2">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={input.password} onChange={(e) => handleChange(e)} required />
                            </div>
                            {error ? <div class="mb-4 sg-btn text-center">
                                <span className='span2 mr-1 text-danger'>
                                    {error}
                                </span>
                            </div> : ''}
                            <button type='submit'>
                                {isLoading == false ? 'Sign In' : 'Loading...'}
                            </button>
                        </form>
                    </div>
                    <div className='col-12 si-a mb-5 text-center'>
                        Don't have an account ? <Link to='/register'>Sign Up</Link>
                    </div>
                </div>
            </div>
            <Alert show={show} variant="success">
                <Alert.Heading>Thank You.</Alert.Heading>
                <p>
                    Your Login Successfull...
                </p>
            </Alert>
        </>
    )

}

export default SignIn
