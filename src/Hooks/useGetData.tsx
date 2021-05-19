import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { dataType } from '../types/type';
export const useGetData = () => {
  const [pokemon, setPokemon] = useState<Array<dataType>>([]);
  const [loading, setLoading] = useState(false);
  const getPokemon = () => {
    setLoading(true);
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((res) => {
        setPokemon(res.data.results);
        console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return { getPokemon, loading, pokemon };
};
