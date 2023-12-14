import React from "react";
import { ReactComponent as Download } from '../images/download.svg';
import { ReactComponent as Email } from '../images/email.svg';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import cv from '../cv/BonnieChan.pdf';
import logoicon from '../images/logoicon.png';

function Footer() {
    return(
    <>
        <footer className="bg-black">
            <section className="text-gray p-8 sm:flex sm:justify-between md:px-20 max-w-300 mx-auto">
                <ul>
                    <h1 className="text-light-blue text-xl font-semibold mb-4 lg:text-2xl">Quick Link</h1>
                    <div className="flex-col gap-y-4">
                        <li className="mb-3"><a href="#about" className="hover:text-white">About</a></li>
                        <li className="mb-3"><a href="#project" className="hover:text-white">Porject</a></li>
                        <li className="mb-3">
                            <a href={cv} download className="w-10 flex items-center cursor-pointer gap-1 footer__cv hover:text-white">
                                <Download className='w-4 h-4 fill-gray footer__cv-icon--hover'/>CV
                            </a>
                        </li>
                        <li className="mb-12 sm:mb-0"><a href="#contact" className="hover:text-white">Contact</a></li>
                    </div>
                </ul>

                <ul>
                    <h1 className="text-light-blue text-xl font-bold mb-4 lg:text-2xl">Contact</h1>
                    <li className="mb-12 ">
                        <a href="mailto:bna279@gmail.com" className="flex gap-2 items-center footer__email hover:text-white">
                            <Email className="w-5 h-5 fill-gray footer__email-icon--hover"/>bna279@gmail.com
                        </a>
                    </li>
                </ul>

                <div>
                    <h1 className="text-light-blue text-xl font-bold mb-4 lg:text-2xl">Social</h1>
                    <div className="flex gap-5 mt-2 xs:gap-7">
                        <a href="https://github.com/wanhsuan625" target='_blank'>
                            <Github className='w-6 h-6 fill-gray hover:fill-white'/>
                        </a>
                        <a href="https://www.linkedin.com/in/wanhsuan-chan-4942ab237/" target='_blank'>
                            <Linkedin className='w-6 h-6 fill-gray hover:fill-white'/>
                        </a>
                    </div>
                </div>
            </section>

            <div className="flex w-11/12 mx-auto max-w-6xl gap-3 items-center my-8 sm:mt-0">
                <hr className="w-1/2" />
                <img src={logoicon} className="w-12 h-12" alt="" />
                <hr className="w-1/2"/>
            </div>

            <p className="text-center pb-8">Copyright © 2023 | Bonnie Chan</p>
        </footer>
    </>
    )
}

export default Footer;