import axios from 'axios';
import React, { Navigate } from 'react-router-dom';

const Logout = (props) => {
    let base_url = props.base_url;

    let config = {
        'headers': {
            'Authorization': 'Token '+localStorage.getItem('auth_token')
        }
    }
    axios.post(
        base_url+"/accounts/token/logout/", 
        {},
        config
    ).then((res)=>{
        console.log("===> logout response: ", res);
        localStorage.setItem('auth_token', null);
        localStorage.setItem('user_type', null);
    }).catch((errors)=>{
        console.log("===> logout errors: ", errors);
        localStorage.setItem('auth_token', null);
        localStorage.setItem('user_type', null);
    });
    
    return <Navigate to='/' />
}

export default Logout;
