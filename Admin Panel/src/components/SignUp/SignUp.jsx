import { useDispatch, useSelector } from 'react-redux';
import './../SignIn/SignIn.css'
import logo from './logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { err, registerAsync } from '../../services/Action/authAction';
import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const SignUp = () => {

    const [show, setShow] = useState(false);
    const { error, isLoading } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        conpassword: ''
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({ ...input, [name]: value })

        if (name === 'password' || name === 'conpassword') {
            setPasswordMatch(value === input.password || value === input.conpassword);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.password === input.conpassword) {
            dispatch(registerAsync(input));
            setInput({
                name: '',
                email: '',
                password: '',
                conpassword: ''
            });
            setShow(true)
        } else {
            dispatch(err('Password Not Match'))
        }
    }

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center align-items-center vh-100 w-100">
                <div className="signin-box d-flex flex-wrap align-items-start p-2" style={{ height: 700, width: 500 }}>
                    <div className='col-12 d-flex flex-wrap mt-5 align-items-center'>
                        <div className='col-10 si-h'>
                            <h2 className='mb-3'>
                                Sign Up
                            </h2>
                            <h4>
                                Create your Saler account to access your <span>JioMart</span> account
                            </h4>
                        </div>
                        <div className='col-2 si-img p-0'>
                            <img src={logo} alt="logo" width={50} />
                        </div>
                    </div>
                    <div className='col-12 si-btn'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-3 px-2">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={(e) => handleChange(e)} required />
                            </div>
                            <div className="mb-3 px-2">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' value={input.email} onChange={(e) => handleChange(e)} required />
                            </div>
                            <div className="mb-3 px-2">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={(e) => handleChange(e)} required />
                            </div>
                            <div className="mb-4 px-2">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name='conpassword' value={input.conpassword} onChange={(e) => handleChange(e)} required />
                            </div>
                            <button type='submit'>
                                {isLoading == false ? 'Sign Up' : 'Loading...'}
                            </button>
                            {error ? <div class="my-3 sg-btn text-center">
                                <span className='span2 mr-1 text-danger'>
                                    {error}
                                </span>
                            </div> : ''}
                        </form>
                    </div>
                    <div className='col-12 si-a mb-5 text-center'>
                        Already have an account ? <Link to="/" >Sign In</Link>
                    </div>
                </div>
            </div>
            <Alert show={show} variant="success">
                <Alert.Heading>Thank You.</Alert.Heading>
                <p>
                    Your Register Successfull...
                </p>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        <Link to='/'>Login</Link>
                    </Button>
                </div>
            </Alert>
        </>
    )

}

export default SignUp