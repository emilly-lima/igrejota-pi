import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jogos from '@/public/jogos.json';

const Ogame = ({jogos}) => {

    const [props, setProps] = React.useState([]);

    useEffect(() => {
        setProps({time: localStorage.getItem('time'),
        players: localStorage.getItem('players'),
        complexity: localStorage.getItem('complexity'),
        gameStyle: localStorage.getItem('gameStyle'),
        format: localStorage.getItem('format'),
        desc: localStorage.getItem('desc'),
        link: localStorage.getItem('link'),
        img: localStorage.getItem('img'),
        game: localStorage.getItem('game')})
    })

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
                    <h1 className='text-center text-3xl mx-5'>{props.game}</h1>
                </div>
                <div>
                <img src={props.img}  
                className='flex h-[200px] justify-center m-auto self-center aspect-square rounded-3xl opacity-1'        
                />
                </div>
                
                <div className="flex pt-1 pb-2 flex-row flex-wrap gap-2 justify-center">
                    <p id='rotulo-jogo'>{props.time}</p>
                    <p id='rotulo-jogo'>{props.players} Jogadores</p>
                    <p id='rotulo-jogo'>{props.format}</p>
                    <p id='rotulo-jogo'>{props.complexity}</p>
                    <p id='rotulo-jogo'>{props.gameStyle}</p>
                </div>
                <div className="flex p-4 flex-row text-sm flex-wrap" id="descricao">
                    <h2 className='overflow-auto'>{props.desc}</h2>
                </div>
                <div id='link'>
                    <a href={props.link}></a>
                </div>
            </div>
        </div>
    )
}

export default Ogame;