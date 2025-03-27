import React, { useContext } from 'react';
import AuthContext from '../Providers/AuthContext';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const { singInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                // console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='my-4 space-y-2'>
              <div className="divider">OR</div>

            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Google</button>
        </div>
    );
};

export default SocialLogin;
