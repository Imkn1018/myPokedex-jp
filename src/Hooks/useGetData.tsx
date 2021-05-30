import React, { useCallback, useState } from 'react';
import axios from 'axios';
import DataJp from '../types/pokemon_jp.json';

type dataType = typeof DataJp;
export const useGetData = () => {
  const [pokemon, setPokemon] = useState<Array<dataType>>([]);
  const [loading, setLoading] = useState(false);
  const getPokemon = () => {
    setLoading(true);
    axios
      .get<Array<dataType>>(
        'https://raw.githubusercontent.com/dayu282/pokemon-data.json/master/jp/gen1-jp.json'
      )
      .then((res) => {
        setPokemon(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return { getPokemon, loading, pokemon };
};
