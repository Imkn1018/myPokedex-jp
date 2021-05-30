import React, { useCallback, useEffect } from 'react';
import { Layout } from '../Templates/Layout';
import { useGetData } from '../../Hooks/useGetData';
import { PokemonCard } from '../Organisms/PokemonCard';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import gen1 from '../../data/gen1-jp.json';
import gen2 from '../../data/gen2-jp.json';
import gen3 from '../../data/gen3-jp.json';
import gen4 from '../../data/gen4-jp.json';
import gen5 from '../../data/gen5-jp.json';
import gen6 from '../../data/gen6-jp.json';
import gen7 from '../../data/gen7-jp.json';
import gen8 from '../../data/gen8-jp.json';

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
          {/* もし日本語のやつであるならば、ここでnoの値を基に並び替え作業が必要？ */}
          {pokemon &&
            pokemon.map((pokeman, i) => (
              <WrapItem key={pokeman.no}>
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
