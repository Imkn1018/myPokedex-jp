import React, { memo, VFC } from 'react';
import { Box, Stack, Image, Text } from '@chakra-ui/react';

type Props = {
  // selectPokemon: () => void;
  imageUrl: string;
  pokemonName: string;
  // pokemonType: string;
};
export const PokemonCard: VFC<Props> = memo(({ imageUrl, pokemonName }) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      // onClick={selectPokemon}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt={pokemonName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {pokemonName}
        </Text>
      </Stack>
    </Box>
  );
});
