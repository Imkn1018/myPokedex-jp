import React from 'react';
import { PokemonCardDetail } from '../Organisms/PokemonCardDetail';
import { Layout } from '../Templates/Layout';
import { useLocation } from 'react-router-dom';

export const Pokemon = () => {
  const location = useLocation();
  console.log(location);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  console.log(id);

  // 現在のURL取得　→　クエリパラメータの取得
  // useSelectPokemon の読み込み　引数はクエリーパラメータ
  // データの取得
  return (
    <Layout>
      <div>ddddddd</div>
      <div>ddd</div>
      {/* <PokemonCardDetail
        imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
          '00' +
          (id + 1)
        ).slice(-3)}.png`}
      /> */}
      {/* 　画像データ　
      　https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                    '00' +
                    (id + 1)
                  ).slice(-3)}.png */}
    </Layout>
  );
};
