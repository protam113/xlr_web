import React, { useEffect } from 'react';
import { RiStarLine } from 'react-icons/ri';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "010669c1-302a-4e93-a1ca-b7df1e431cab");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

        if (data.success) {
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form. Please try again later.');
    }
};

    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return (
    <div className="contact p-6 bg-gray-300 rounded-lg shadow-md max-w-3xl mx-auto my-10"
    data-aos="fade-up">
        <div className="flex flex-col md:flex-row">
            <div className="contact-col mb-6 md:mb-0 md:pr-6 md:border-r md:border-gray-300 md:w-1/2">
                <h3 className="text-2xl font-bold flex items-center mb-2">
                    Send us a message <RiStarLine className="ml-2 text-yellow-500 animate-spin"/>
                </h3>
                <br className="max-md:hidden" />
                <p className="text-gray-700 mb-4">Feel free to reach out through the contact form or</p>
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />
                <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center"><IoMdMail className="mr-2"/>xlr.devteam03@admin.com</li>
                    <li className="flex items-center"><FaPhoneAlt className="mr-2"/>+84 377783437</li>
                </ul>
            </div>
            <div className="contact-col md:w-2/3 md:pl-6">
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Your name</label>
                        <input type="text" name="name" placeholder="Enter your name" required className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Your mail</label>
                        <input type="mail" name="mail" placeholder="Enter your mail" required className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone number</label>
                        <input type="tel" name="phone" placeholder="Enter your phone number" required className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Write your messages here</label>
                        <textarea name="messages" placeholder="Enter your messages" required className="w-full px-4 py-2 bg-gray-100 ring-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 h-40"></textarea>
                    </div>
                    <div className="submit-button">
                        <button type="submit" className=''>
                            <a href="#_" className="relative inline-block text-lg group">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                    <span className="relative">submit</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </a>
                        </button>
                    </div>
                </form>
            </div>
            <br/>
        </div>
        <br/>
    </div>
);
};

export default Contact;
