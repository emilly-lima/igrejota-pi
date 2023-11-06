import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faQuestion } from '@fortawesome/free-solid-svg-icons'

let offsetHeight;
export default function Navbar() {
    const headerRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);

    React.useLayoutEffect(() => {
        setHeight(headerRef.current.offsetHeight);
        offsetHeight = height;
    }, [headerRef.current])

    return (
        <div ref={headerRef} className="w-full flex px-16 fixed z-[1000] bg-zinc-800 h-20 items-center place-content-between gap-2 md:gap-8">
            <h1 className="text-white font-bold">IGREJOTA</h1>
            <div className='flex flex-row items-center'>
                <div className='flex flex-row relative mx-9'>
                    <input type="text" placeholder="Buscar jogo.." />
                    <FontAwesomeIcon icon={faMagnifyingGlass} width={24} height={24} className='absolute top-2 right-2 pointer-events-none' />
                </div>
                <button className='px-4'>
                    <FontAwesomeIcon icon={faQuestion} width={30} height={30} />
                </button>
            </div>
        </div>
    )
}