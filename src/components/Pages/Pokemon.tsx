import React, { useEffect, useState } from 'react';
import { PokemonCardDetail } from '../Organisms/PokemonCardDetail';
import { Layout } from '../Templates/Layout';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Data from '../../types/pokemonSpeciesType.json';

type pokemoSpecies = typeof Data;

export const Pokemon = () => {
  const [pokeman, setPokeman] = useState<pokemoSpecies | null>(null);
  // 現在のURL取得　→　クエリパラメータの取得
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  // get query parameter
  const id = searchParams.get('id');

  // useSelectPokemon の読み込み　引数はクエリーパラメータ
  useEffect(() => {
    axios
      .get<pokemoSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => {
        setPokeman(res.data);
        console.log(res.data);
      });
  }, []);
  // データの取得
  return (
    <Layout>
      {pokeman && (
        <PokemonCardDetail
          imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
            '00' + id
          ).slice(-3)}.png`}
          pokemonName={pokeman?.names[0].name}
        />
      )}

      {/* 　画像データ　
      　https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                    '00' +
                    (id + 1)
                  ).slice(-3)}.png */}
    </Layout>
  );
};
