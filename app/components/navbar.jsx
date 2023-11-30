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
        <div id='nav' className="w-full flex z-[1000] h-[75px] items-center place-content-between">
            <Link href="/">
                <h1 className="text-white font-bold ml-[20px] text-2xl  sm:text-3xl  lg:ml-[80px] xl:ml-[130px]">TABLETOPPING</h1></Link>
            <div className='flex flex-row items-center lg:mr-[80px] xl:mr-[130px]'>
            <div>
                <Busca/>
            </div>
                <button className='rounded-[16px] w-[46px] h-[38px] bg-zinc-200 mr-[20px] ml-[-12px] hover:bg-white  lg:px-4 lg:h-[48px]' onClick={() => setOpenModal(true)}>
                    <FontAwesomeIcon icon={faQuestion} width={30} height={30} className=' w-[28px] h-[28px] ml-[-7px] mt-[-2px] lg:h-[33px] lg:mt-0'/>
                </button>
                <div>
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                    <img src="modal1.png" alt=""/> 
                    </Modal>
                </div>
            </div>
        </div>
    )
}