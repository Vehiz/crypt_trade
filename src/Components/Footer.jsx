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
          <div className="flex items-center justify-around w-[100%]">
            <div className="w-[18%] grid pt-[50px] gap-[20px] pl-[50px] ">
              <h2 className='font-bold text-lg'>CryptTrade</h2>
              <p className='pt-[0px] text-gray-500'>
                Pixitrades remains the easiest, safest and fastest web app for
                cryptocurrency trading, exchange and investments globally.
              </p>
            </div>
            <div className="w-[15%] grid gap-[20px]">
                <h2 className='font-bold'>Company</h2>
                <ul className='grid gap-[10px] text-gray-500'>
                    <li>Contact & support</li>
                    <li>Setting & privacy</li>
                    <li>News</li>
                </ul>
            </div>
            <div className="w-[15%] grid gap-[20px]">
                <h2 className='font-bold'>Products</h2>
                <ul className='grid gap-[10px] text-gray-500'>
                    <li>Exchange</li>
                    <li>Investment</li>
                    <li>Trading</li>
                </ul>
            </div>
            <div className="w-[15%] grid gap-[20px]">
                <h2 className='font-sans font-bold text-[]'>Resources</h2>
                <ul className='grid gap-[10px] text-gray-500'>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Terms & conditions</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
      <div className="flex w-[83.5%] items-center border-t-2 border-gray-600 justify-between  py-[35px] pb-[40px] text-[#fff]">
        <div className="flex items-center">
            <p>© 2023 CryptTrade. All rights reserved</p>
        </div>
        <div className="flex gap-[20px] items-end">
                <a><FaFacebookF/></a>
                <a><FaTwitter/></a>
                <a><FaInstagram/></a>
                <a><FaLinkedinIn/></a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
