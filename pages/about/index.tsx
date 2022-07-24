import type { NextPage } from 'next';
import { Box, Stack, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const Home: NextPage = () => {
    const AboutLinksArray = [
        {
            title: 'Recipe Search API',
            description: 'API providing search of recipes',
            href: 'https://api.edamam.com/api/recipes/v2',
        },
        {
            title: 'Recipe Details API',
            description: 'API with recipe details',
            href: 'https://api.edamam.com/api/recipes/v2/{id}',
        },
    ];
    return (
        <Box>
            <Stack
                minH={'90vh'}
                justify={'center'}
                spacing={10}
                align={{ base: 'center', md: 'center' }}
            >
                <Text
                    fontSize={{ base: '3xl', md: '5xl' }}
                    fontWeight={'bold'}
                    color={'gray.600'}
                    textAlign={'center'}
                >
                    About
                </Text>
                <UnorderedList>
                    {AboutLinksArray.map((aboutLinks) => {
                        return (
                            <ListItem key={aboutLinks.title}>
                                {aboutLinks.title} - {aboutLinks.description} -{' '}
                                {aboutLinks.href}
                            </ListItem>
                        );
                    })}
                </UnorderedList>
            </Stack>
        </Box>
    );
};

export default Home;
