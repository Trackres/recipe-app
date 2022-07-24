import type { NextPage } from 'next';
import { Box, Stack, Text, SimpleGrid } from '@chakra-ui/react';
import HomeLink from '../components/commons/HomeLink';

const Home: NextPage = () => {
    const HomeLinksArray = [
        {
            title: 'Search',
            description:
                'Click button to navigate to search.',
            buttonTitle: 'Search recipes',
            href: '/recipes/',
        },
        {
            title: 'About',
            description: 'Click below to find source of recipes and used libraries in building this application.',
            buttonTitle: 'Click here!',
            href: '/about/',
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
                    Welcome to the Recipe App
                </Text>
                <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight={'normal'}
                    textAlign={'center'}
                    color={'gray.600'}
                    maxW={'50%'}
                >
                    Cooking often requires good recipes to make delicious food.
                    <br />
                    Below links will direct you to search engine, where you can
                    find recipes filtering by certain ingredients, get more
                    details about recipes and get information about source of
                    those recipes.
                </Text>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    row={{ base: HomeLinksArray.length, lg: 1 }}
                    spacing={{ base: 2, lg: 10 }}
                >
                    {HomeLinksArray.map((homeLink) => {
                        return (
                            <HomeLink
                                key={homeLink.title}
                                title={homeLink.title}
                                description={homeLink.description}
                                buttonTitle={homeLink.buttonTitle}
                                href={homeLink.href}
                            />
                        );
                    })}
                </SimpleGrid>
            </Stack>
        </Box>
    );
};

export default Home;
