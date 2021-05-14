import React, { VFC } from 'react';
import { Box, Stack, Image, Text } from '@chakra-ui/react';

type Props = {
  imageUrl: string;
};

export const PokemonCardDetail: VFC<Props> = ({ imageUrl }) => {
  return (
    <Box>
      <Stack>
        <Image src={imageUrl} />
        <Text>dddddddddd</Text>
      </Stack>
    </Box>
  );
};
