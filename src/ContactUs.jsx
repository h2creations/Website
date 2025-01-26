import React, { useEffect, useState } from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const ContactUs = ({ selectedPlan }) => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (selectedPlan) {
            setMessage(`I am interested in the ${selectedPlan}`);
        }
    }, [selectedPlan]);

    const { ref: imgRef, inView: isImageVisible } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    // handle submit to send Mail
    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = 'service_g5tn35b';
        const templateId = 'template_rtghu23';
        const publicKey = '0WfCitZMNmaA7sqLK';
        const templateParams = {
            from_name: name,
            email: email,
            message: message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                alert('Message Sent successfully!')
            })
            .catch((error) => {
                alert('Error in sending the Message, try later...')
            });
    };

    return (
        <div id="ContactUs">
            <div className="block md:flex inset-0 bg-gray-900 p-9">
                <div className="md:w-1/2 flex flex-col items-center md:mt-10">
                    <h1 className="text-2xl md:text-3xl bold font-roboto text-gray-100">GET IN TOUCH TODAY</h1>
                    <p className="text-gray-400 py-4 font-medium md:px-24">
                        We're here to assist you! If you have any questions or need assistance, please feel free to reach out to us.
                    </p>
                    <img
                        ref={imgRef}
                        className={`hidden md:block h-[250px] ${isImageVisible ? 'animate__animated animate__lightSpeedInLeft animate__slower' : ''}`}
                        src="./reachus.png"
                        alt="Contact us through mail"
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center mx-auto md:w-[500px] backdrop-blur-xl rounded-lg bg-[#fffcfc45]">
                        <input
                            required
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="focus:outline-none md:w-[400px] mt-10 mb-2 rounded-md p-2 md:p-3 focus:ring-2 focus:ring-teal-500"
                            type="text"
                            placeholder="Enter your Name"
                        />
                        <input
                            required
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="focus:outline-none md:w-[400px] m-2 rounded-md p-2 md:p-3 focus:ring-2 focus:ring-teal-500"
                            type="email"
                            placeholder="Enter your Email"
                        />
                        <textarea
                            required
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="focus:outline-none w-[200px] md:w-[400px] m-4 rounded-md p-2 md:p-2 h-40 focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your Message!"
                        ></textarea>
                        <button
                            type="submit"
                            className="m-4 p-2 hover:scale-110 active:bg-teal-700 transition-all duration-75 bg-teal-500 rounded text-white shadow-lg shadow-teal-600"
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
            <footer className="bg-gray-800 text-gray-400 py-5">
                <div className="mx-auto text-center">
                    <p className="text-sm">© 2025 H2Creations. All rights reserved.</p>
                    <p className="text-sm">
                        Follow us on{' '}
                        <a
                            href="https://www.facebook.com/profile.php?id=61572679104968"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 hover:underline"
                        >
                            Facebook
                        </a>
                        ,{' '}
                        <a
                           href='mailto:admin@h2creations.in'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 hover:underline"
                        >
                            Mail
                        </a>
                        , and{' '}
                        <a
                            href='https://www.instagram.com/h2creations.web/' 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 hover:underline"
                        >
                             Instagram
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
