import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { dataType } from '../types/type';
export const useGetData = () => {
  const [pokemon, setPokemon] = useState<Array<dataType>>([]);
  const [loading, setLoading] = useState(false);
  const getPokemon = async () => {
    setLoading(true);
    await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=300')
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return { getPokemon, loading, pokemon };
};
