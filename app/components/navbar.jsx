"use client";
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import Modal from "@/app/components/modal"
import { useState } from 'react';
import Link from 'next/link'
import Busca from './busca';

/*let offsetHeight;*/
export default function Navbar() {
    /*const headerRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);

    React.useLayoutEffect(() => {
        setHeight(headerRef.current.offsetHeight);
        offsetHeight = height;
    }, [headerRef.current])
*/
    const [openModal, setOpenModal] = useState(false)

    return (
        <div /*ref={headerRef}*/ className="w-full flex z-[1000] bg-zinc-800 h-[75px] items-center place-content-between lg:gap-2">
            <Link href="/">
                <h1 className="text-white font-bold ml-[20px] text-2xl  sm:text-3xl  lg:ml-[130px]">IGREJOTA</h1></Link>
            <div className='flex flex-row items-center lg:mr-[130px]'>
            <div>
                <Busca/>
            </div>
                <button className=' rounded-[16px] w-[48px] h-[45px] bg-zinc-200 mr-[20px] ml-[-12px] hover:bg-white  lg:px-4 md:w-[50px] lg:h-[54px]' onClick={() => setOpenModal(true)}>
                    <FontAwesomeIcon icon={faQuestion} width={30} height={30} className='flex items-center w-[20px] h-[30px] ml-[-2px] lg:h-[37px] lg:ml-[0px]'/>
                </button>
                <div>
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate mi tristique hendrerit rhoncus. Quisque maximus enim eget mauris imperdiet tincidunt. Pellentesque commodo consequat diam vitae tincidunt. Phasellus mollis sem lobortis volutpat accumsan. Nam auctor nulla porttitor venenatis dictum. Proin venenatis turpis sit amet ante malesuada, id tempor metus consectetur. Sed vulputate accumsan lacus vitae egestas. Quisque ut elit in ligula lobortis semper. Quisque vehicula massa euismod risus posuere, sit amet accumsan elit mattis. Pellentesque est enim, feugiat vitae ullamcorper nec, ullamcorper vitae eros. Ut eu hendrerit dui.
                    </Modal>
                </div>
            </div>
        </div>
    )
}