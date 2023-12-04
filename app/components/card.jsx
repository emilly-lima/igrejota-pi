import React from 'react';
import Link from 'next/link';
const Card = ({ jogos }) => {
    return (
        <div className='flex flex-row gap-[58px] px-[185px] justify-center py-6 relative flex-wrap bottom-0 top-[130px]'>
            {jogos && jogos.map((item) => (
                <Link href="/game" key={item.game} onClick={() => {
                    localStorage.setItem('game', item.game) 
                    localStorage.setItem('img', item.img) 
                    localStorage.setItem('time', item.time) 
                    localStorage.setItem('players', item.players) 
                    localStorage.setItem('complexity', item.complexity) 
                    localStorage.setItem('gameStyle', item.gameStyle) 
                    localStorage.setItem('format', item.format)
                    {/* localStorage.setItem('desc', item.desc) */}
                    {/* localStorage.setItem('link', item.link) */}
                }}>
                    <div className='relative z-[-4]'>
                        <div key={item.game} id='carta-super' className='cursor-pointer'>
                            <div id='carta-infer' />
                            <img className='aspect-square object-fill rounded-xl ' src={item.img} alt={item.Jogo} />
                            <h3>{item.game}</h3>
                            <div className='flex flex-row flex-wrap p-1 items-start gap-1 '>
                                <p>{item.time}</p>
                                <p>{item.players + ' Jogadores'}</p>
                                <p>{item.complexity}</p>
                                <p>{item.gameStyle}</p>
                                <p>{item.format}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div >
    );
};

export default Card;