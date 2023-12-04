"use client";
import * as React from 'react'
import Modal from "@/app/components/modal"
import { useState } from 'react';
import Link from 'next/link'
import Busca from './busca';

/*let offsetHeight;*/
export default function Navbar2() {
    /*const headerRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);

    React.useLayoutEffect(() => {
        setHeight(headerRef.current.offsetHeight);
        offsetHeight = height;
    }, [headerRef.current])
*/
    const [openModal, setOpenModal] = useState(false)

    return (
        <div id='nav' className="w-screen flex z-[1000] h-[62px] items-center place-content-between relative">
            <Link href="/">
                <h1 className="text-white font-bold ml-[20px] text-2xl  sm:text-3xl  lg:ml-[80px] xl:ml-[130px]">TABLETOPPING</h1></Link>
            <div className='flex flex-row items-center lg:mr-[80px] xl:mr-[130px]'>
            <div>
                <Busca/>
            </div>
            <button className='bg-none' onClick={() => setOpenModal(true)}>
                    <img src="/assets/botao-ajuda.svg" className="w-[45px] h-[45px]" alt="botao-ajuda" />
                </button>
                <div>
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                    <img src="/assets/modal-2.svg" alt="modal-como-funciona-lista-de-jogos"/> 
                    </Modal>
                </div>
            </div>
        </div>
    )
}