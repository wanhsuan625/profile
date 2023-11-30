import React , { useState , useEffect } from 'react';
import Project from '../component/Project';
import { projects as projectData } from '../projectData';

function Showcase(){
    let [projects, setProjects] = useState([]);
    projects = projectData;

    return (
    <>
        <section id='project' className='max-w-300 mx-auto pb-10 px-4 md:px-7 xl:px-0'>
            <h2
                className='text-black text-center text-3xl font-medium pb-9
                            lg:text-5xl lg:font-medium lg:pb-12'
            >
                My Project
            </h2>
            <div className='grid grid-cols-1 gap-y-8 gap-x-5
                            sm:grid-cols-2 md:gap-y-14 lg:grid-cols-3 lg:gap-x-7'>
                {projects.slice().reverse().map((project) => (
                    <Project
                        key={project.id}
                        cover={project.cover}
                        title={project.title}
                        description={project.description}
                        liveSite={project.liveSite}
                        codePage={project.codePage}
                    />
                ))}
            </div>
        </section>
    </>
    )
}

export default Showcase;