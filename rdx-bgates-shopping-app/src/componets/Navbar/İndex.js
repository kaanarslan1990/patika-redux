import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
function Navbar() {
  return (
    <Center mt="20px">
      <Box w="950px" bg="cyan">
        <Center mt="20px" p="10px">
          <Image
            borderRadius="full"
            boxSize="100px"
            boxShadow='dark-lg'
            bg='white'

            src="https://shortest.link/2ZlT"
          />
        </Center>

        <Center mt="20px" p="10px" color="brown">
          <Heading> Spend World's Richest Money </Heading>
        </Center>
      </Box>
    </Center>
  );
}

export default Navbar;
