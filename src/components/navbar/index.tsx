import React from 'react';
import { Link } from 'react-router-dom';
import {mainLogo} from '../../assets'

type NavbarProps = {

}

const Navbar:React.FC<NavbarProps> = (props) => {
    return (
        <nav className="bg-white shadow-md border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-800 sticky top-0 z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to={'/'}>
                    <img src={mainLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                </Link>
                <li className='list-none'>
                    <Link to={'/bookmark'}>
                        <p className="text-black cursor-pointer" aria-current="page">BookMarkKu</p>
                    </Link>
                </li>
            </div>
        </nav>
    );
};

export default Navbar;