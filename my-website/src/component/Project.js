import React , { useState } from 'react';
import { ReactComponent as Livesite } from '../images/link.svg';
import { ReactComponent as CodePage } from '../images/github-dark.svg';

function Project( { cover , title , description , liveSite , codePage } ){
    const [direction, setDirection] = useState("top");

    const handleMouseEnter = (e) => {
        // 取得元素的寬度和高度，還有元素左上端點的座標
        const { width, height , top , left } = e.currentTarget.getBoundingClientRect();     // top , left 是和瀏覽器左上點的距離作比較 (會因為滑動而改變數值) 
        const x = e.clientX;
        const y = e.clientY;
        const threshold = 5;

        // 計算滑鼠滑入元素時，與元素左上端點的相對距離
        const offsetX = x - left;
        const offsetY = y - top;
        // 斜率
        const aim_slope = height / width * (-1);
        const slope = offsetY / offsetX * (-1);

        if( threshold * (-1) <=  offsetX && offsetX <= threshold ) setDirection("left");
        else if(  threshold * (-1) <= offsetY && offsetY <= threshold ) setDirection("top");
        else if( slope >= aim_slope ) setDirection("right");    //  slope 比目標斜率 大的話， 就是從右邊來的
        else setDirection("bottom");
    };

    return(
    <>
        <section className='border-2 border-slate-300 w-full rounded-lg'>
            <figure
                onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseEnter}
                className='project__cover shadow-xl'
            >
                <img src={cover} className='rounded-t-md' alt="" />
                <div className={`w-full h-full absolute bg-black rounded-t-md opacity-50 project__tag-${direction}`}></div>
            </figure>
            
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
