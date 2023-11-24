import React from 'react';
import { ReactComponent as Livesite } from '../images/link.svg';
import { ReactComponent as CodePage } from '../images/github-dark.svg';

function Project( { cover , title , description , liveSite , codePage } ){
    return(
    <>
        <section className='border-2 border-slate-300 w-full rounded-lg'>
            <img src={cover} className='rounded-t-md shadow-xl' alt="" />
            
            <div className='text-black p-4 pt-7 md:p-6 md:pt-7 md:pb-5'>
                <h1 className='font-medium text-xl lg:text-2xl'>{title}</h1>
                <p className='font-extralight mt-2 mb-3 min-h-18'>{description}</p>

                <div className='flex justify-end items-center gap-6'>
                    <a href={liveSite} target='_blank'>
                        <Livesite className='w-5 h-5 cursor-pointer'/>
                    </a>
                    <a href={codePage} target='_blank'>
                        <CodePage className='w-5.5 h-5.5 cursor-pointer'/>
                    </a>
                </div>
            </div>
        </section>
    </>
    )
}

export default Project;
