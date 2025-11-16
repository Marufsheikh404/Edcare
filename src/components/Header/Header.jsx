import React from 'react';
import TopHeader from './Top-Header';
import MiddleHeader from './MiddleHeader';
import Navber from './Navber';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MiddleHeader></MiddleHeader>
            <Navber></Navber>
        </div>
    );
};

export default Header;