import React from 'react';
import{FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome,} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import { BsPersonFill, BsPaypal } from 'react-icons/bs';


function Footer() {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-4">

            <div className='flex flex-col gap-5'>
                <p className='text-white font-bold text-2xl tracking-wide font-titleFont'> STEP IN STYLE</p>
                <p className='text-white text-xl tracking-wide'> &#169; ncreativess.com</p>
                <div className='flex gap-5 text-lg text-gray-400'>
                    <FaFacebookF className="hover:text-white duration-300 cursor-pointer"></FaFacebookF>
                    <FaTwitter className="hover:text-white duration-300 cursor-pointer"></FaTwitter>
                    <FaInstagram className="hover:text-white duration-300 cursor-pointer"></FaInstagram>
                    <FaYoutube className="hover:text-white duration-300 cursor-pointer"></FaYoutube>
                    <FaHome className="hover:text-white duration-300 cursor-pointer"></FaHome>
                </div>
            </div>
            <div className='font-bodyFont'>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>ncreativess, Singapore</p>
                    <p>Mobile, +65 9105 6409</p>
                    <p>Phone, +65 9105 6409</p>
                    <p>e-mail, info@ncreativess.com</p>

                </div>
            </div>
            <div className='font-bodyFont'>
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                        <span><BsPersonFill/></span>{" "}
                        my account
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                        <span><BsPaypal/></span>{" "}
                        Checkout
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                        <span><FaHome/></span>{" "}
                        Order Tracking
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                        <span><MdLocationOn/></span>{" "}
                        Help &amp; Support
                    </p>
                </div>
            </div>
            <div className='font-bodyFont flex flex-col justify-center'>
                <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' type='text'></input>
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
            </div>


        </div>
    </div>
  )
}

export default Footer