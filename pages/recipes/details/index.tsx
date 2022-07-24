import { Box, Stack, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const RecipesDetails = () => {
    return (
        <Box>
            <Stack
                minH={'90vh'}
                justify={'center'}
                spacing={10}
                align={{ base: 'center', md: 'center' }}
            >
                <Text
                    fontSize={{ base: '1xl', md: '3xl' }}
                    fontWeight={'bold'}
                    color={'gray.600'}
                    textAlign={'center'}
                >
                    You accessed recipe details without choosing recipe. Follow
                    below link to search for recipes!
                </Text>
                <Link href={'/recipes/'}>
                    <Button
                        mt={10}
                        w={'10rem'}
                        bg={'green.400'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        _hover={{
                            bg: 'green.500',
                        }}
                        _focus={{
                            bg: 'green.500',
                        }}
                    >
                        Search recipes
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
};

export default RecipesDetails;
