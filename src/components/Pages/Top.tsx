import React, { useCallback, useEffect } from 'react';
import { Layout } from '../Templates/Layout';
import { useGetData } from '../../Hooks/useGetData';
import { PokemonCard } from '../Organisms/PokemonCard';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Top = () => {
  const { getPokemon, pokemon, loading } = useGetData();
  const onClickGetPoke = useCallback(() => {
    getPokemon();
    console.log(pokemon);
  }, []);

  return (
    <Layout>
      <button onClick={onClickGetPoke}>Click</button>
      {loading ? (
        <div>loading</div>
      ) : (
        <Wrap p={{ base: 8, md: 10 }} justify="center">
          {/* <PokemonCard
          pokemonName={pokemon[0].name}
          imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
        /> */}
          {pokemon.map((pokeman, i) => (
            <WrapItem key={pokeman.url}>
              <Link to={`/pokemon?id=${i + 1}`}>
                <PokemonCard
                  pokemonName={pokeman.name}
                  imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                    '00' +
                    (i + 1)
                  ).slice(-3)}.png`}
                />
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </Layout>
  );
};
