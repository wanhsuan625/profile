import React , { useState } from 'react';
import { ReactComponent as Sendemail } from '../images/send.svg';
import emailjs from '@emailjs/browser';
import emailjsConfig from '../emailjsConfig';

function Form(){
    const { SERVICE_ID , TEMPLATE_ID , PUBLIC_KEY } = emailjsConfig;
    const [ form , setForm ] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name , value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send( 
            SERVICE_ID ,
            TEMPLATE_ID ,
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
                to_name: "Bonnie",
                to_email: "bna279@gmail.com"
            },
            PUBLIC_KEY
        )
    }


    return(
    <>
        <form action="" onSubmit={handleSubmit} className="rounded-md bg-white py-7 px-5 mt-16 lg:mt-0 lg:max-w-md lg:min-h-125 lg:bottom-6 lg:px-7 contact__form">
            <label htmlFor="name" className='text-black font-medium'>Name
                <input
                    id="name"
                    type="text"
                    name='name'
                    value={form.name}
                    placeholder='Enter your name...'
                    className="w-full font-light py-2 px-4 border border-gray rounded-md mt-1.5 mb-6"
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="email" className='text-black font-medium'>Email
                <input
                    id='email'
                    type="email"
                    name='email'
                    value={form.email}
                    placeholder='example@gmail.com...'
                    className="w-full font-light py-2 px-4 border border-gray rounded-md mt-1.5 mb-6"
                    onChange={handleChange}
                />
            </label>
            <label htmlFor='message' className='text-black font-medium'>Message
                <textarea
                    id="message"
                    name='message'
                    value={form.message}
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full font-light py-3 px-4 h-24 border border-gray rounded-md mt-1.5 mb-7 lg:h-35"
                    onChange={handleChange}
                >
                </textarea>
            </label>
            <button type="submit" className="bg-light-blue border-2 border-light-blue py-2.5 justify-center rounded-md w-full flex items-center gap-3 sendEmailButton hover:bg-white">
                <Sendemail className="sendEmailButton__icon--hover"/>
                <span className="sendEmailButton__text--hover">Send Email</span>
            </button>
        </form>
    </>
    )
}

export default Form;