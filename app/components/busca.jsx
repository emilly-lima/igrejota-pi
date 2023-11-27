import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Busca () {
    return (
<div className='flex flex-row relative ml-[20px]  lg:m-6 lg:ml-0 xl:mx-9'>
                    <input type="text" placeholder="Buscar jogo..." className='bg-zinc-200  rounded-[16px] w-[30px] h-[38px] mr-[30px] lg:w-[350px] xl:w-[400px] hover:bg-white' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} width={30} height={30} className='absolute top-2 left-[12px] w-[22px] h-[22px] pointer-events-none lg:left-[315px] xl:left-[365px]' />
                </div>
    )
}