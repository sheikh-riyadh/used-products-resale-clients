import React from 'react';
import { useTitle } from '../../Hook/userTitle';

const Login = () => {
    useTitle('login')
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
};

export default Login;