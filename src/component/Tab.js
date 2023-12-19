import React from 'react';

function Tab ( { img , title , desc , secondDesc } ) {
    return (
    <>
    <li className='bg-white rounded-xl shadow-up text-black py-8 px-5 text-center
                    xs:flex xs:gap-4 xs:items-center xs:mx-auto md:py-6 md:w-full md:flex-col md:h-90 md:even:mt-10 md:justify-evenly md:last:mt-20 lg:w-70'>
        <div>
            <img src={img} alt="" className='w-1/3 mx-auto xs:w-25'/>
            <h1 className='text-2xl font-medium pt-3 pb-5 xs:w-60 xs:pb-0 md:w-full'>{title}</h1>
        </div>

        <div>
            <p className='xs:max-w-sm xs:text-left md:text-center'>{desc}</p>
            <p className='xs:max-w-sm xs:text-left md:text-center mt-2.5'>{secondDesc}</p>
        </div>
    </li>
    </>
    )
}

export default Tab;