import React , { useState , useEffect } from 'react';
import logo from '../images/logo.png';
import bars from '../images/bars.svg';
import close from '../images/close.svg';
import { ReactComponent as Download } from '../images/download.svg';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';

function Navbar(){
    const [ isHidden , setIsHidden ] = useState(true);
    const [ scrollY , setScrollY ] = useState(false);
    const unfoldNavbar = () => { setIsHidden(!isHidden); }
    
    useEffect( () => {
        // above 768px , unfold menu should disapper
        window.addEventListener('resize' , () => {
            if( window.innerWidth >= 768 ) setIsHidden(true);
        })

        // confirm whether the computer screen is at the top.
        window.addEventListener('scroll' , () => {
            document.documentElement.scrollTop > 30 ? setScrollY(true) : setScrollY(false);
        })
    })
    

    return (
    <>
    <section className={`w-full fixed top-0 z-50 bg-white shadow-lg`}>
        <nav className='max-w-300 mx-auto flex justify-between items-center px-5 py-3 xl:px-0'>
            <a className='w-40 md:w-48 lg:w-60 grid place-content-center cursor-auto' href='#'>
                <img src={logo} alt="" className='cursor-pointer'/>
            </a>

            <ul className={`text-gray menu ${ isHidden ? 'w-0 overflow-hidden' : 'w-1/2 xs:w-62.5'} transition-width duration-300`}>
                <li>
                    <a href='#about' className='block menu__item menu__item--hover menu__item--active'>About</a>
                </li>
                <li>
                    <a href='#project' className='block menu__item menu__item--hover menu__item--active'>Project</a>
                </li>
                <li>
                    <a href="#" className='cv menu__item menu__item--hover menu__item--active flex justify-center items-center gap-1'>
                        <Download className='w-4 h-4 downloadIcon--hover md:fill-gray'/>CV
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <button className='menu__button menu__button--hover menu__button--active'>Get in Touch</button>
                    </a>
                </li>


                <div className={` ${ isHidden ? 'hidden' : 'flex' } gap-8 justify-center mt-24 md:hidden`}>
                    <a href="https://github.com/wanhsuan625" target='_blank'>
                        <Github className='w-8 h-8 hover:fill-slate-700'/>
                    </a>
                    <a href="https://www.linkedin.com/in/wanhsuan-chan-4942ab237/" target='_blank'>
                        <Linkedin className='w-8 h-8 hover:fill-slate-700'/>
                    </a>
                </div>
            </ul>

            <img 
                src={ isHidden ? bars : close }
                onClick={unfoldNavbar}
                className={`w-6 h-6 cursor-pointer md:hidden z-10 ${ isHidden ? null : 'fixed right-5 hover:scale-125' }`}
                alt=""/>
        </nav>
    </section>
    </>
    )
}

export default Navbar;