import React from 'react';
import { ReactComponent as Livesite } from '../images/link.svg';
import { ReactComponent as CodePage } from '../images/github-dark.svg';

function Project( { cover , tags , title , description , liveSite , codePage } ){

    return(
    <>
        <section className='border-2 border-slate-300 w-full rounded-lg'>
            <a href={liveSite} target='_blank'>
                <figure className='project__cover shadow-xl overflow-hidden'>
                    <img src={cover} className='rounded-t-md' alt="" />
                    <div className='w-full h-full absolute rounded-t-md project__tag-container px-5'>
                        <ul className='h-full flex justify-center content-center gap-5 flex-wrap'>
                            {tags.map((tag, index) => (
                                <li key={index} className='project__tag'>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </figure>
            </a>
            
            <div className='text-black p-4 pt-7 md:p-6 md:pt-7 md:pb-5'>
                <h1 className='font-medium text-xl lg:text-2xl'>{title}</h1>
                <p className='font-extralight mt-2 mb-4 min-h-18'>{description}</p>

                <div className='flex justify-end items-center gap-6'>
                    <a href={liveSite} target='_blank'>
                        <Livesite className='w-5 h-5 lg:w-6 lg:h-6 cursor-pointer'/>
                    </a>
                    <a href={codePage} target='_blank'>
                        <CodePage className='w-6 h-6 lg:w-7 lg:h-7 cursor-pointer'/>
                    </a>
                </div>
            </div>
        </section>
    </>
    )
}

export default Project;
