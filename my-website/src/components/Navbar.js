import React , { useState , useEffect } from 'react';
import logo from '../images/logo.png';
import bars from '../images/bars.svg';
import close from '../images/close.svg';
import { ReactComponent as Download } from '../images/download.svg';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';

function Navbar(){
    const [ isHidden , setIsHidden ] = useState(true);
    const unfoldNavbar = () => { setIsHidden(!isHidden); }
    useEffect( () => {
        window.addEventListener( 'resize' , () => {
            if( window.innerWidth > 767 ) setIsHidden(true); })
    })

    return (
    <>
        <nav className='flex justify-between items-center px-5 py-4 mx-auto max-w-6xl xl:px-10 xl:py-8'>
            <a className='w-52 sm:w-60 lg:w-80 grid place-content-center cursor-auto' href='#'>
                <img src={logo} alt="" className='cursor-pointer'/>
            </a>

            <ul className={`text-gray menu ${ isHidden ? 'w-0' : 'w-1/2'} transition-width duration-300`}>
                <li>
                    <button className='menu__item menu__item--hover menu__item--active'>About</button>
                </li>
                <li>
                    <button className='menu__item menu__item--hover menu__item--active'>Project</button>
                </li>
                <li>
                    <a href="#" className='cv menu__item menu__item--hover menu__item--active flex justify-center items-center gap-1'>
                        <Download className='w-4 h-4 downloadIcon--hover md:fill-gray'/>CV
                    </a>
                </li>
                <li>
                    <button className='menu__button menu__button--hover menu__button--active'>Get in Touch</button>
                </li>


                <div className={` ${ isHidden ? 'hidden' : 'flex' } gap-8 justify-center mt-28 md:hidden`}>
                    <a href="#" target='_blank'>
                        <Github className='w-8 h-8 hover:fill-slate-700'/>
                    </a>
                    <a href="#" target='_blank'>
                        <Linkedin className='w-8 h-8 hover:fill-slate-700'/>
                    </a>
                </div>
            </ul>

            <img 
                src={ isHidden ? bars : close }
                onClick={unfoldNavbar}
                className={`w-6 h-6 cursor-pointer md:hidden z-10 ${ isHidden ? null : 'hover:scale-125' }`}
                alt=""/>
        </nav>
    </>
    )
}

export default Navbar;