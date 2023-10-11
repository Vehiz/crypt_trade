// import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#02021E] grid">
      <div className="pt-[70px] pb-[100px]">
        <div className="mr-auto ml-auto text-[#fff]">
          <div className="flex items-center justify-center w-[100%]">
            <div className="w-[20%]">
              <h2>CryptTrade</h2>
              <p>
                Pixitrades remains the easiest, safest and fastest web app for
                cryptocurrency trading, exchange and investments globally
              </p>
            </div>
            <div className="w-[20%]">
                <h2>Company</h2>
                <ul>
                    <li>Contact & support</li>
                    <li>Setting & privacy</li>
                    <li>News</li>
                </ul>
            </div>
            <div className="w-[20%]">
                <h2>Products</h2>
                <ul>
                    <li>Exchange</li>
                    <li>Investment</li>
                    <li>Trading</li>
                </ul>
            </div>
            <div className="w-[20%]">
                <h2>Resources</h2>
                <ul>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Terms & conditions</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] items-center justify-between px-[80px] text-[#fff]">
        <div className="flex items-start">
            <p>© 2023 CryptTrade. All rights reserved</p>
        </div>
        <div className="flex gap-[20px] items-end">
                <a><FaFacebookF/></a>
                <a><FaTwitter/></a>
                <a><FaInstagram/></a>
                <a><FaLinkedinIn/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
