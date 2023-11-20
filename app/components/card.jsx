import React from 'react';

const Card = ({ jogos }) => {
    return (
        <div className='flex flex-row gap-[58px] justify-center py-6 flex-wrap relative bottom-0'>
            {jogos && jogos.map((item) => (
                <div key={item.Jogo} className="w-[200px] h-[300px] bg-zinc-500">
                    <h2>{item.Jogo}</h2>
                    <p>{item.Tempo}</p>
                    <p>{item.Jogadores}</p>
                    <p>{item.Formato}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;