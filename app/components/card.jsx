import React from 'react';
import Link from 'next/link';
const Card = ({ jogos }) => {
    return (
        <div className='flex flex-row gap-[58px] px-48 justify-center py-6 flex-wrap relative bottom-0 '>
            {jogos && jogos.map((item) => (
                <Link href="/game" key={item.Jogo}>
                    <div className='relative '>
                        <div key={item.Jogo} id='carta-super'>
                            <div id='carta-infer' />
                            <img className='aspect-square object-fill rounded-xl' src={item.Img} alt={item.Jogo} />
                            <h3>{item.Jogo}</h3>
                            <div className='flex flex-row flex-wrap p-1 items-start gap-1'>
                                <p>{item.Tempo}</p>
                                <p>{item.Njoga}</p>
                                <p>{item.Peso}</p>
                                <p>{item.Estilo}</p>
                                <p>{item.Formato}</p>
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