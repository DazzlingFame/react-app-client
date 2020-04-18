import React from 'react';
import logo from '../../images/logo.svg';
import './loaderStyles.css'

export function Loader() {
    return (
        <div className="loader">
                <img src={logo} className="loader-logo" alt="logo" />
        </div>
    );
}