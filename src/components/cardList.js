import React from 'react';
import Card from './card';

function CardList ( {data, onPokemonSelect} ) {
    return (
        <div>
            {
                data.map((user, i) => {
                    return (
                        <Card
                            name={data[i].name}
                            id={data[i].id}
                            type={data[i].types[0].type.name}
                            data={data}
                            onPokemonSelect={onPokemonSelect}
                        />
                    )
                })
            }
        </div>
    )
}
 
export default CardList