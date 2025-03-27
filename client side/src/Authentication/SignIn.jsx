// import Lottie from 'lottie-react';
import React, { useContext } from 'react';
// import loginLottieJSON from '../../assets/lottie/login.json'
import AuthContext from '../Providers/AuthContext';
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { singInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('in signIn page', location)
    const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        singInUser(email, password)
            .then(result => {
                // console.log('sign in', result.user)
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card border-none rounded-4xl bg-zinc-950/30 w-full max-w-md shrink-0 shadow-2xl p-10 space-y-3">
                    <h1 className="ml-8 mt-4 text-5xl text-center font-bold">Login now !</h1>
                    <form onSubmit={handleSignIn} className="card-body space-y-2">
                        <div className="form-control space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
