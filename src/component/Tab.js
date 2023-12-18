import React from 'react';

function Tab ( { img , title , desc } ) {
    return (
    <>
    <li className='bg-white shadow-up rounded-lg text-black py-8 px-5 text-center
                    xs:flex xs:gap-6 xs:items-center xs:mx-auto md:py-10 md:w-full md:flex-col md:h-fit md:even:mt-10 md:last:mt-20 lg:w-70'>
        <div>
            <img src={img} alt="" className='w-1/3 mx-auto xs:w-25'/>
            <h1 className='text-2xl font-medium pt-3 pb-5 xs:w-60 xs:pb-0 md:w-full'>{title}</h1>
        </div>
        <p className='xs:max-w-sm'>{desc}</p>
    </li>
    </>
    )
}

export default Tab;