import React, { VFC } from 'react';
import { Box, Stack, Image, Text } from '@chakra-ui/react';

type Props = {
  imageUrl: string;
  pokemonName: string;
};

export const PokemonCardDetail: VFC<Props> = ({ imageUrl, pokemonName }) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Stack>
        <Image src={imageUrl} boxSize="160px" borderRadius="full" m="auto" />
        <Text>{pokemonName}</Text>
      </Stack>
    </Box>
  );
};
