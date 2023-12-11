import React from 'react';
import arrow from '../images/arrow-right.svg';
import computer from '../images/computer.jpg';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';

function Header() {
    return (
    <>
        <header className='max-w-300 mx-auto md:flex md:justify-between mt-13 md:mt-16 mb-20 md:mb-36 lg:mb-48'>
            <div className='header__background'></div>
            <article className='text-center text-white text-sm py-10 px-8 max-w-md m-auto
                                md:py-12 md:px-3 md:text-left md:mx-8 lg:max-w-xl lg:pl-14 lg:pb-16 lg:pt-18'>
                <h1 className='text-3xl font-bold xs:text-4xl lg:text-5xl'>Frontend developer creating my own website</h1>
                <p className='pt-6 pb-5 xs:text-base md:pr-5 lg:py-8'>
                    Hello, I'm Bonnie , a software engineer from Taichung.
                    I like working on interesting and creative projects that challenge me.
                </p>
           
                {/* link project area */}
                <a href="#project" className='text-light-blue text-base py-0.5 rounded-md md:text-lg hover:border-2 hover:px-1'>
                    view my projects
                    <img src={arrow} alt="" className='inline w-3 h-3 ml-2 animate-bounce'/>
                </a>
            </article> 

            <aside className='hidden md:block w-72 absolute right-0 lg:w-80'>
                <img src={computer} className='grayscale h-full w-full rounded-b-lg' alt="" />
                <div className='absolute bottom-0 py-2 px-5 bg-black w-full h-15 rounded-b-lg flex items-center justify-end gap-6'>
                    <a href="https://github.com/wanhsuan625" target='_blank'>
                        <Github className='h-9 w-9 cursor-pointer hover:fill-pink'/>
                    </a>
                    <a href="https://www.linkedin.com/in/wanhsuan-chan-4942ab237/" target='_blank'>
                        <Linkedin className='h-9 w-9 cursor-pointer hover:fill-pink'/>
                    </a>
                </div>
            </aside>
        </header>
    </>
    )
}

export default Header;