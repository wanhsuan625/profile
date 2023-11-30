import React from 'react';
import selfie from '../images/照片.jpg';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';

function About(){
    return (
    <>
        <section 
            id='about'
            className='bg-black mt-14 rounded-md max-w-300 flex flex-wrap px-8 py-14
                        md:mt-28 md:justify-between md:mx-7 xl:p-14 xl:mx-auto'>
            <img src={selfie} className='w-full max-h-75 object-cover md:ml-4 md:w-1/4' alt="" />
            
            <article className='text-white md:w-2/3'>
                <div>
                    <h1 className='text-4xl font-medium pt-6 md:pt-0 md:pb-2 lg:text-5xl lg:font-medium'>My Background</h1>
                    <p className='my-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit, excepturi dignissimos commodi et soluta quas tempore officiis alias odio? A dignissimos voluptate suscipit perferendis sed. Quae vero corrupti voluptatum, molestiae accusantium unde eius earum eaque asperiores ad omnis voluptate molestias ab maiores iste quibusdam amet, modi quo minus quos.
                    </p>
                </div>

                <div className='flex gap-4 items-center'>
                    <a href="#contact">
                        <button className='py-2 px-7 border-2 rounded-md border-light-blue bg-light-blue hover:bg-transparent hover:text-light-blue'>Get in touch</button>
                    </a>
                    <a href="https://github.com/wanhsuan625" target='_blank'>
                        <Github className='w-6 h-6 cursor-pointer ml-3 hover:fill-gray hover:scale-110'/>
                    </a>
                    <a href="https://www.linkedin.com/in/wanhsuan-chan-4942ab237/" target='_blank'>
                        <Linkedin className='w-6 h-6 cursor-pointer hover:fill-gray hover:scale-110'/>
                    </a>
                </div>
            </article>
        </section>
    </>
    )
}

export default About;