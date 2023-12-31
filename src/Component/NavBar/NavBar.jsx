import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className='d-flex justify-content-between align-items-center px-2 rounded-sm'>
            <Nav>
                <Link to="/" className='d-flex justify-content-center align-items-center'>
                    <FaHome />
                </Link>
                <Nav.Link href="#home">সমগ্র বাংলাদেশ</Nav.Link>
                <Nav.Link href="#features">বিশ্ব</Nav.Link>
                <Nav.Link href="#pricing">খেলা</Nav.Link>
                <Nav.Link href="#pricing">ক্রিকেট</Nav.Link>
                <Nav.Link href="#pricing">বাণিজ্য</Nav.Link>
                <Nav.Link href="#pricing">নাগরিক সাংবাদিকতা</Nav.Link>
                <Nav.Link href="#pricing">টিউব</Nav.Link>
            </Nav>

            <div className='d-flex gap-4'>
                {
                    user?.uid ? <>
                        <div className='d-flex gap-4 justify-content-center align-items-center'>
                            {
                                user?.displayName ? <span>{user?.displayName}</span> : <CgProfile className='fs-5 text-primary' />
                            }
                            <Link onClick={handleLogOut} className='text-decoration-none'>লগ আউট</Link>
                        </div>
                    </> : <>
                        <Link to="/register" className='text-decoration-none'>
                            <Nav.Link href="#pricing">নিবন্ধন</Nav.Link>
                        </Link>
                        <Link to="/login" className='text-decoration-none'>
                            <Nav.Link href="#pricing">লগইন</Nav.Link>
                        </Link>
                    </>
                }

            </div>
        </div>
    );
};

export default NavBar;