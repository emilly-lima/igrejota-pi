"use client";
import * as React from 'react'
import Link from 'next/link'
import Busca from './busca';

/*let offsetHeight;*/
export default function Navbar3() {
    /*const headerRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);

    React.useLayoutEffect(() => {
        setHeight(headerRef.current.offsetHeight);
        offsetHeight = height;
    }, [headerRef.current])
*/

    return (
        <div id='nav' className="w-screen flex z-[1000] h-[62px] items-center place-content-between relative">
            <Link href="/">
                <h1 className="text-white font-bold ml-[20px] text-2xl  sm:text-3xl  lg:ml-[80px] xl:ml-[130px]">TABLETOPPING</h1></Link>
            <div className='flex flex-row items-center lg:mr-[80px] xl:mr-[130px]'>
            <div>
                <Busca/>
            </div>
            <button className='bg-none mt-[3px] pointer-events-none' >
                    <img src="/assets/botao-ajuda.svg" className="w-[45px] h-[45px] mr-[20px] opacity-60" alt="botao-ajuda" />
                </button>

            </div>
        </div>
    )
}