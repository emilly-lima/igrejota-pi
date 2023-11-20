"use client";
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faQuestion } from '@fortawesome/free-solid-svg-icons'
import Modal from "@/app/components/modal"
import { useState } from 'react';
import Link from 'next/link'

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
        <div /*ref={headerRef}*/ className="w-full flex px-16 z-[1000] bg-zinc-800 h-[108px] items-center place-content-between gap-2 md:gap-8 ">
            <Link href="/">
                <h1 className="text-white font-bold ml-[130px]">IGREJOTA</h1></Link>
            <div className='flex flex-row items-center mr-[130px]'>
                <div className='flex flex-row relative mx-9'>
                    <input type="text" placeholder="Buscar jogo..." className='bg-zinc-200  rounded-[16px] w-[400px] h-[43px] mr-[30px] hover:bg-white'/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} width={24} height={24} className='absolute top-2.5 left-[365px] w-[22px] h-[22px] pointer-events-none ' />
                </div>
                <button className='px-4 rounded-[16px] w-[50px] h-[54px] bg-zinc-200 hover:bg-white' onClick={() => setOpenModal(true)}>
                    <FontAwesomeIcon icon={faQuestion} width={30} height={30} className='flex items-center w-[20px] h-[37px]'/>
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