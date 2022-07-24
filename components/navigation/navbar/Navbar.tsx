import { Box, Stack, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (
        <>
            <Box w="100%">
                <Stack
                    isInline
                    bg={'white'}
                    color={'gray.600'}
                    minH={'5vh'}
                    w={'100%'}
                    minW={'100%'}
                    fontWeight={'medium'}
                    align={{ base: 'center', md: 'center' }}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={'gray.200'}
                    justify={'center'}
                    spacing={4}
                >
                    <EditIcon w={6} h={6} />
                    <Text fontSize="2xl">Recipes App</Text>
                </Stack>
            </Box>
        </>
    );
};

export default Navbar;
