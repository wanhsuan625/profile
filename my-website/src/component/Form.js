import React , { useState , useEffect ,useRef } from 'react';
import { ReactComponent as Sendemail } from '../images/send.svg';
import emailjs from '@emailjs/browser';
import emailjsConfig from '../emailjsConfig';

function Form(){
    const { SERVICE_ID , TEMPLATE_ID , PUBLIC_KEY } = emailjsConfig;
    const regEmail = new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
    const [ validateName , setValidateName ] = useState();
    const [ validateEmail , setValidateEmail ] = useState();
    const [ validateMessage , setValidateMessage ] = useState();    // validateName , validateEmail , validateMessage 初始值設定為 undefined 讓 isButtonDisabled 變數比較好去變化
    const [ isButtonDisabled , setIsButtonDisabled ] = useState(true);
    const [ loading , setLoading ] = useState(undefined);
    const [ form , setForm ] = useState({
        name : '',
        email : '',
        message : ''
    });

    // 判斷input是不是空白的
    const inputEmpty = ( value , state ) => {
        state( !value || value.length < 1 );         // input 空白 -> 錯誤訊息要出現
    }

    // 將 Name , Email , Message 的值寫入 form 變數中
    const handleChange = (e) => {
        const { name , value } = e.target;
        
        // 判斷 name , email , message 是否空白
        if ( name === "name" ) inputEmpty( value , setValidateName );
        else if ( name === "email" ) inputEmpty( value , setValidateEmail );
        else if ( name === "message" ) inputEmpty( value , setValidateMessage );

        setForm({
            ...form,
            [ name ] : value,
        })
    }

    // Sumbit button 根據 input 的內容作變化
    useEffect( () => {
        // 一開始validateName,validateEmail,validateMessage是undefined(false)，會影響到isButtonDisabled直接變成false，所以要避免
        if ( validateName === undefined || validateEmail === undefined || validateMessage === undefined ) return;
        
        // input都是(false , 也就是非空白)，button的disabled屬性才能轉為flase
        setIsButtonDisabled( validateName || validateEmail || validateMessage );
    } , [ validateName , validateEmail , validateMessage ] );


    //  透過emailjs傳送信
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
            PUBLIC_KEY )
        .then( (response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch( (error) => {
            console.log('FAILED...', error);
         });
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
                    placeholder='Bonnie Chan ...'
                    className="w-full font-light py-2 px-4 border border-gray rounded-md mt-1.5 mb-6"
                    onChange={handleChange}
                />
                <span className={`${ validateName ? "absolute" : "hidden" } text-sm text-red-600 font-light left-2 top-19`}>* Field must not be empty.</span>
            </label>
            <label htmlFor="email" className='text-black font-medium'>Email
                <input
                    id='email'
                    type="email"
                    name='email'
                    value={form.email}
                    placeholder='example@gmail.com ...'
                    className="w-full font-light py-2 px-4 border border-gray rounded-md mt-1.5 mb-6"
                    onChange={handleChange}
                />
                <span className={`${ validateEmail ? "absolute" : "hidden" } text-sm text-red-600 font-light left-2 top-19`}>* Field must not be empty.</span>
            </label>
            <label htmlFor='message' className='text-black font-medium'>Message
                <textarea
                    id="message"
                    name='message'
                    value={form.message}
                    placeholder="Hello, I'd like to talk about ..."
                    className="w-full font-light py-3 px-4 h-24 border border-gray rounded-md mt-1.5 mb-6 lg:h-35"
                    onChange={handleChange}
                >
                </textarea>
                <span className={`${ validateMessage ? "absolute" : "hidden" } text-sm text-red-600 font-light left-2 top-32 lg:top-44`}>* Field must not be empty.</span>
            </label>
            <button
                type="submit"
                className={` ${isButtonDisabled ? 'bg-gray border-gray': 'bg-light-blue border-light-blue sendEmailButton hover:bg-white'}
                            border-2 py-2.5 justify-center rounded-md w-full flex items-center gap-3`}
                disabled={isButtonDisabled}
            >
                <Sendemail className="sendEmailButton__icon--hover"/>
                <span className="sendEmailButton__text--hover">Send Email</span>
            </button>
        </form>
    </>
    )
}

export default Form;