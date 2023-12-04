import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jogos from '@/public/jogos.json';

const Ogame = ({jogos}) => {

    return (
        <div>
            <div >
                <div className="flex justify-end p-5 items-center">
                    <Link className="right-[70%] absolute" href="/second">
                        <Image src="/assets/seta-voltar.svg" alt="seta-voltar"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <h1>{localStorage.getItem('game')}</h1>
                </div>
                <img src={localStorage.getItem('img')}  
                className='h-[250px] self-center aspect-square rounded-3xl'        
                />
                
                <div className="pt-5">
                    <p>{localStorage.getItem('time')}</p>
                    <p>{localStorage.getItem('players')} Jogadores</p>
                    <p>{localStorage.getItem('format')}</p>
                    <p>{localStorage.getItem('complexity')}</p>
                    <p>{localStorage.getItem('gameStyle')}</p>
                </div>
                <div className="p-2" id="descricao">
                    <h2>{/* localStorage.getItem('desc') */}</h2>
                </div>
                <div id='link'>
                    {/*<a href={localStorage.getItem('link')}></a>*/}
                </div>
            </div>
        </div>
    )
}

export default Ogame;