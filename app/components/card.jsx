import React from 'react';
import Link from 'next/link';
const Card = ({ jogos }) => {
    return (
        <div className='flex flex-row gap-[58px] px-48 justify-center py-6 flex-wrap relative bottom-0 '>
            {jogos && jogos.map((item) => (
                <Link href="/game" key={item.Jogo}>
                    <div className='relative '>
                        <div key={item.Jogo} id='carta-super' className="w-[145px] h-[220px] md:w-[200px] md:h-[300px] cursor-pointer items-center flex flex-col gap-2 p-5 rounded-xl">
                            <div id='carta-infer' className='absolute top-0 left-0 h-full w-full rotate-6 z-[-1] text-center rounded-xl' />
                            <img className='aspect-square object-fill rounded-xl' src={item.Img} alt={item.Jogo} />
                            <h3>{item.Jogo}</h3>
                            <p>{item.Tempo}</p>
                            <p>{item.Jogadores}</p>
                            <p>{item.Formato}</p>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div >
    );
};

export default Card;