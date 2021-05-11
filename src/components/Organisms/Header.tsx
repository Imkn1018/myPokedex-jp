import React, { VFC, memo, useCallback } from 'react';
import { Flex, useDisclosure, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const history = useHistory();
  const onClickHome = useCallback(() => history.push('/'), [history]);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          textAlign="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
          <Heading
            as="h1"
            textAlign="center"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            Pokedex
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        ></Flex>
      </Flex>
    </>
  );
});
