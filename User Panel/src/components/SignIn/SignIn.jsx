import './SignIn.css'
import logo from './logo.png'
import google from './google.png'
import { useDispatch, useSelector } from 'react-redux'
import { googleLogInAsync } from '../../services/Action/authAction'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const { isLogin } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogle = () => {
        dispatch(googleLogInAsync());
    }

    useEffect(() => {
        if (isLogin == true) {
            navigate('/')
        }
    }, [isLogin])

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center align-items-center vh-100 w-100 singin">
                <div className="signin-box d-flex flex-wrap align-items-start">
                    <div className='col-12 d-flex flex-wrap mt-5 align-items-center'>
                        <div className='col-10 si-h'>
                            <h2 className='mb-3'>
                                Sign In
                            </h2>
                            <h4>
                                Verify your Google account to access your <span>JioMart</span> account
                            </h4>
                        </div>
                        <div className='col-2 si-img p-0'>
                            <img src={logo} alt="logo" width={50} />
                        </div>
                    </div>
                    <div className='col-12 text-center si-img p-0'>
                        <img src={google} alt="google" width={380} />
                    </div>
                    <div className='col-12 text-center si-btn'>
                        <button onClick={handleGoogle}>
                            Continue
                        </button>
                    </div>
                    <div className='col-12 si-a mb-5'>
                        <a>
                            By continuing, you agree to our Terms and Conditions of Use, Privacy Policy Retail Account Privacy Policy.
                        </a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SignIn