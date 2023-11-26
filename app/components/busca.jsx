import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Busca () {
    return (
<div className='flex flex-row relative ml-[20px] lg:mx-9 lg:ml-[0px]'>
                    <input type="text" placeholder="Buscar jogo..." className='bg-zinc-200  rounded-[16px] w-[43px] h-[45px] mr-[30px] lg:w-[400px] hover:bg-white' lg/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} width={50} height={50} className='absolute top-2.5 left-[11px] w-[24px] h-[24px] pointer-events-none md:left-[365px] lg:w-[22px] lg:h-[22px]' />
                </div>
    )
}