import React, { useEffect } from 'react';
import { Layout } from '../Templates/Layout';
import { useGetData } from '../../Hooks/useGetData';
import { PokemonCard } from '../Organisms/PokemonCard';

export const Top = () => {
  const { getPokemon, pokemon, loading } = useGetData();
  const onClickGetPoke = () => {
    getPokemon();
    console.log(pokemon);
  };

  return (
    <Layout>
      <button onClick={onClickGetPoke}>Click</button>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          {/* <PokemonCard
          pokemonName={pokemon[0].name}
          imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
        /> */}
          {pokemon.map((pokeman, i) => (
            <div>
              <PokemonCard
                key={i}
                pokemonName={pokeman.name}
                imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                  '00' +
                  (i + 1)
                ).slice(-3)}.png`}
              />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};
