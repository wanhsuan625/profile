import React from 'react';
import photo from '../images/photo.jpg';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';

function About(){
    return (
    <>
    <div className='pt-15 mb-20' id='about'>
        <section className='bg-black rounded-md max-w-300 flex flex-wrap px-8 py-14
                            mt-5 md:justify-between lg:items-center md:mx-7 xl:p-14 xl:mx-auto'>
            <img src={photo} className='w-full max-h-75 object-cover md:ml-4 md:w-1/4' alt="" />
            
            <article className='text-white md:w-2/3'>
                <div>
                    <h1 className='text-4xl font-medium pt-6 md:pt-0 md:pb-2 lg:text-5xl lg:font-medium'>My Background</h1>
                    <p className='mt-4 mb-6 font-light lg:text-lg'>
                        I am a frontend developer from Taichung. I’ve been self-teaching myself web development and participated in a six-month bootstrap program, WeHelp. I like to code out clean, intuitive user interfaces from designs.
                        <br />
                        <br />
                        In my free time, I enjoy practicing web development, watching films and videos on various themes, socializing outdoors, and spending time with family and friends.
                    </p>
                </div>

                <div className='flex gap-4 items-center'>
                    <a href="#contact">
                        <button className='py-2 px-7 border-2 rounded-md border-light-blue bg-light-blue hover:bg-transparent hover:text-light-blue'>Get in touch</button>
                    </a>
                    <a href="https://github.com/wanhsuan625" target='_blank' rel="noreferrer noopener">
                        <Github className='w-6 h-6 cursor-pointer ml-3 hover:fill-gray hover:scale-110'/>
                    </a>
                    <a href="https://www.linkedin.com/in/wanhsuan-chan-4942ab237/" target='_blank' rel="noreferrer noopener">
                        <Linkedin className='w-6 h-6 cursor-pointer hover:fill-gray hover:scale-110'/>
                    </a>
                </div>
            </article>
        </section>
    </div>
    </>
    )
}

export default About;