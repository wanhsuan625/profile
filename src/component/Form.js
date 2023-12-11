import React , { useState , useEffect } from 'react';
import { ReactComponent as Sendemail } from '../images/send.svg';
import emailjs from '@emailjs/browser';
import emailjsConfig from '../emailjsConfig';
import {ReactComponent as Close } from '../images/close.svg';
import done from '../images/done.png';
import error from '../images/error.png';

function Form(){
    const { SERVICE_ID , TEMPLATE_ID , PUBLIC_KEY } = emailjsConfig;
    const regEmail = new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
    const [ isEmailValid , setIsEmailValid ] = useState(true);
    const [ isNameEmpty , setIsNameEmpty ] = useState();
    const [ isEmailEmpty , setIsEmailEmpty ] = useState();
    const [ isMessageEmpty , setIsMessageEmpty ] = useState();    // isNameEmpty , isEmailEmpty , isMessageEmpty 初始值設定為 undefined 讓 isButtonDisabled 變數比較好去變化
    const [ isButtonDisabled , setIsButtonDisabled ] = useState(true);
    const [ isLoading , setIsLoading ] = useState(false);
    const [ emailSendFail , setEmailSendFail ] = useState(false);
    const [ form , setForm ] = useState({
        name : '',
        email : '',
        message : ''
    });

    // 判斷input是不是空白的
    const inputEmpty = ( value , state ) => {
        state( !value || value.length < 1 );         // input 空白 -> 錯誤訊息要出現
    }

    const handleChange = (e) => {
        const { name , value } = e.target;
        
        // 判斷 name , email , message 是否空白
        if ( name === "name" ) inputEmpty( value , setIsNameEmpty );
        else if ( name === "message" ) inputEmpty( value , setIsMessageEmpty );
        else if ( name === "email" ) {
            inputEmpty( value , setIsEmailEmpty );
            
            // email 要符合格式
            const emailTest = regEmail.test(value);
            setIsEmailValid(emailTest);
        };

        // 將 Name , Email , Message 的值寫入 form 變數中
        setForm({
            ...form,
            [ name ] : value,
        })
    }

    // Sumbit button 根據 input 的內容作變化
    useEffect( () => {
        // 一開始isNameEmpty,isEmailEmpty,isMessageEmpty是undefined(false)，會影響到isButtonDisabled直接變成false，所以要避免
        if ( isNameEmpty === undefined || isEmailEmpty === undefined || isMessageEmpty === undefined ) return;
        
        // input都是(false , 也就是非空白)，button的disabled屬性才能轉為flase
        setIsButtonDisabled( isNameEmpty || isEmailEmpty || !isEmailValid || isMessageEmpty );
    } , [ isNameEmpty , isEmailEmpty , isEmailValid , isMessageEmpty ] );

    // 傳送信息完成後，清除input內容、button設定disabled
    const clearInput = (e) => {
        setForm({
            name: "",
            email: "",
            message: ""
        });
        setIsNameEmpty(undefined);
        setIsEmailEmpty(undefined);
        setIsMessageEmpty(undefined);
        setIsButtonDisabled(true);
    }

    //  透過emailjs傳送信
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);      // loading 效果呈現
        clearInput();

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
            setEmailSendFail(false);
            setTimeout( () => {
                setIsLoading(false);
            }, 2800 );
        })
        .catch( (error) => {
            setEmailSendFail(true);
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
                <span className={`${ isNameEmpty ? "absolute" : "hidden" } text-sm text-red-600 font-light left-2 top-19`}>* Field must not be empty.</span>
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
                <span className={`${ isEmailEmpty ? "absolute" : ( isEmailValid ? "hidden" : "absolute" ) } text-sm text-red-600 font-light left-2 top-19`}>
                    { isEmailEmpty ? "* Field must not be empty." : "* Must be a valid email address." }
                </span>
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
                <span className={`${ isMessageEmpty ? "absolute" : "hidden" } text-sm text-red-600 font-light left-2 top-32 lg:top-44`}>* Field must not be empty.</span>
            </label>
            <button
                type="submit"
                className={` ${isButtonDisabled ? 'bg-gray border-gray': 'bg-light-blue border-light-blue sendEmailButton hover:bg-white'}
                            border-2 py-2.5 justify-center rounded-md w-full flex items-center gap-3`}
                disabled={isButtonDisabled}
            >
                <span className="sendEmailButton__text--hover">Send Email</span>
                <Sendemail className="sendEmailButton__icon--hover"/>
            </button>
        </form>

        <div className={`py-4 px-5 rounded gap-5 bg-dark-gray bottom-3 right-0 md:right-5 flex items-center ${ isLoading ? ( emailSendFail? "fixed" : "sendEmailResultBox fixed") : "hidden" }`}>
            <img src={ emailSendFail ? error : done } alt="" />
            <span className='pr-10'>{ emailSendFail ? "Oops! Please send it again. Thank you" : "Mail sent" }</span>
            <Close className='w-3.5 h-3.5 absolute top-2 right-3 cursor-pointer' onClick={ () => setIsLoading(false) }/>
        </div>
    </>
    )
}

export default Form;