import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jogos from '@/public/jogos.json';

const Ogame = ({jogos}) => {

    return (
        <div>
            <div >
                <div className="flex justify-center p-5 items-center">
                    <Link className="right-[70%] absolute" href="/second">
                        <Image src="/assets/seta-voltar.svg" alt="seta-voltar"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <h1 className='text-center text-3xl mx-5'>{localStorage.getItem('game')}</h1>
                </div>
                <div>
                <img src={localStorage.getItem('img')}  
                className='flex h-[200px] justify-center m-auto self-center aspect-square rounded-3xl opacity-1'        
                />
                </div>
                
                <div className="flex pt-1 pb-2 flex-row flex-wrap gap-2 justify-center">
                    <p id='rotulo-jogo'>{localStorage.getItem('time')}</p>
                    <p id='rotulo-jogo'>{localStorage.getItem('players')} Jogadores</p>
                    <p id='rotulo-jogo'>{localStorage.getItem('format')}</p>
                    <p id='rotulo-jogo'>{localStorage.getItem('complexity')}</p>
                    <p id='rotulo-jogo'>{localStorage.getItem('gameStyle')}</p>
                </div>
                <div className="flex p-4 flex-row text-sm flex-wrap" id="descricao">
                    <h2 className='overflow-auto'>{localStorage.getItem('desc')}</h2>
                </div>
                <div id='link'>
                    <a href={localStorage.getItem('link')}></a>
                </div>
            </div>
        </div>
    )
}

export default Ogame;