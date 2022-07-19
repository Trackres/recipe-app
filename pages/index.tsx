import type { NextPage } from 'next';
import { Box, Stack, Text, SimpleGrid } from '@chakra-ui/react';
import HomeLink from '../components/commons/HomeLink';

const Home: NextPage = () => {
    const HomeLinksArray = [
        {
            title: 'Search',
            description:
                'Write below name of the ingredient or simply click button to navigate to search.',
            buttonTitle: 'Search recipes',
            input: true,
            inputPlaceholder: 'Write ingredient name here',
            href: '/recipes/',
        },
        {
            title: 'Recipes Details',
            description: 'Provide recipe id to follow directly to details.',
            buttonTitle: 'Show details',
            input: true,
            inputPlaceholder: 'Write id name here',
            href: '/recipes/details/',
        },
        {
            title: 'About',
            description: 'Click below to find source of recipes.',
            buttonTitle: 'Click here!',
            input: false,
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
                    columns={{ base: 1, lg: 3 }}
                    row={{ base: HomeLinksArray.length, lg: 1 }}
                    spacing={{ base: 2, lg: 10 }}
                >
                    {HomeLinksArray.map((homeLink) => {
                        return (
                            <HomeLink
                                title={homeLink.title}
                                description={homeLink.description}
                                buttonTitle={homeLink.buttonTitle}
                                input={homeLink.input}
                                inputPlaceholder={homeLink.inputPlaceholder}
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
