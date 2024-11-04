import React from 'react';
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <p>innovative engineer</p> {/* You can add your logo here if needed */}
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a 
                    href="https://www.linkedin.com/in/ajay-polavarapu-04a293255/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://github.com/your-github-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a 
                    href="https://www.instagram.com/your-instagram-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a 
                    href="https://twitter.com/your-twitter-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
