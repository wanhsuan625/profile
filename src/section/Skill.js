import React from 'react';
import Tab from '../component/Tab';
import { allSkills as allSkillData } from '../data/allSkillData';
import { skillTabs as skillData } from '../data/primarySkillData';

function PrimarySkill () {
    const skills = skillData;
    const allSkills = allSkillData;

    return(
    <>
    <section className='max-w-300 mx-auto px-4 pt-6 md:px-7 xl:px-0 lg:mt-28 lg:mb-12'>
        <h2 className='text-black text-center text-3xl font-medium pb-12
                        lg:text-5xl lg:font-medium lg:pb-12'>
            My <span className='text-pink'>primary</span> skills
        </h2>
        
        <ul className='text-dark-gray font-medium text-lg pb-15 px-3 flex flex-wrap justify-center gap-6 lg:px-0'>
            { allSkills.map( ( item ) => 
                <li className='underline underline-offset-8 decoration-2 decoration-light-blue even:decoration-gray md:text-xl'> {item} </li>
            )}
        </ul>

        <ul className='grid gap-13 md:grid-cols-3 md:gap-10'>
            { skills.map( ( skill ) => 
                <Tab 
                    key={skill.id}
                    img={skill.img}
                    title={skill.title}
                    desc={skill.desc}
                    secondDesc={skill.secondDesc}
                />
            )}
        </ul>
        
    </section>
    </>
    )
}

export default PrimarySkill;

// react  communicative  committed