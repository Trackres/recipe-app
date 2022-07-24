import { useEffect, useState } from 'react';
import { RecipeSearchResult, RecipesRequestParams } from '../../types/';
import { Box, Flex, Button, Spinner, Input, Text } from '@chakra-ui/react';
import RecipeCardLink from '../../components/commons/RecipeCardLink';
import Link from 'next/link';
import Select from 'react-select';
import { RecipeService } from '../../services';

type RecipeSearchProps = {
    initialSearchResults: {
        from: number;
        to: number;
        count: number;
        _links: {
            next: {
                href: string;
                title: string;
            };
        };
        hits: Array<RecipeSearchResult>;
    };
};

const diets = [
    {
        label: 'balanced',
        value: 'balanced',
    },
    {
        label: 'high-fiber',
        value: 'high-fiber',
    },
    {
        label: 'high-protein',
        value: 'high-protein',
    },
    {
        label: 'low-carb',
        value: 'low-carb',
    },
    {
        label: 'low-fat',
        value: 'low-fat',
    },
    {
        label: 'low-sodium',
        value: 'low-sodium',
    },
];

const mealTypes = [
    {
        label: 'Breakfast',
        value: 'Breakfast',
    },
    {
        label: 'Dinner',
        value: 'Dinner',
    },
    {
        label: 'Lunch',
        value: 'Lunch',
    },
    {
        label: 'Snack',
        value: 'Snack',
    },
    {
        label: 'Teatime',
        value: 'Teatime',
    },
];

const RecipeSearch = ({ initialSearchResults }: RecipeSearchProps) => {
    const [moreRecipesUrl, setMoreRecipesUrl] = useState(
        initialSearchResults ? initialSearchResults._links.next.href : ''
    );
    const [searchResults, setSearchResults] = useState(
        initialSearchResults ? initialSearchResults.hits : []
    );
    const [ingredientName, setIngredientName] = useState<string>('');
    const [diet, setDiet] = useState<string[]>([]);
    const [mealType, setMealType] = useState<string[]>([]);

    const getRecipesByUrl = async (url: string) => {
        const data = await RecipeService.getRecipesByUrl(url);
        setMoreRecipesUrl(data._links);
        setSearchResults((currentState) => [...currentState, ...data.hits]);
    };

    const getRecipesByParams = async () => {
        const inputParams: RecipesRequestParams = {
            q: ingredientName,
            diet: diet,
            mealType: mealType,
        };
        const data = await RecipeService.getRecipesByParams(inputParams);
        setSearchResults(data.hits);
        setMoreRecipesUrl(data._links);
    };
    return (
        <Box>
            <Flex
                margin={15}
                padding={15}
                border={1}
                borderStyle={'solid'}
                borderColor={'gray.200'}
                justify={'center'}
            >
                <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight={'bold'}
                    color={'gray.600'}
                    textAlign={'center'}
                ></Text>
                <Input
                    ml="5"
                    w="400px"
                    placeholder="Write name of ingredient"
                    onChange={(ev) => setIngredientName(ev.target.value)}
                />
                <Box ml={10}>
                    <Select
                        instanceId={'diets-select'}
                        options={diets}
                        isMulti={true}
                        onChange={(values) => {
                            setDiet(
                                values.map((value) => {
                                    return value.value;
                                })
                            );
                        }}
                    />
                </Box>
                <Box ml={10}>
                    <Select
                        instanceId={'meal-types-select'}
                        options={mealTypes}
                        isMulti={true}
                        onChange={(values) =>
                            setMealType(
                                values.map((value) => {
                                    return value.value;
                                })
                            )
                        }
                    />
                </Box>
                <Button
                    onClick={() => {
                        getRecipesByParams();
                    }}
                    ml={10}
                    w={'100px'}
                    bg={'green.400'}
                    color={'white'}
                    rounded={'xl'}
                    _hover={{
                        bg: 'green.500',
                    }}
                    _focus={{
                        bg: 'green.500',
                    }}
                >
                    Search
                </Button>
            </Flex>
            <Flex
                gap="4"
                direction={'row'}
                flexWrap={'wrap'}
                justify={'center'}
            >
                {searchResults.map((recipeContainer) => {
                    return (
                        <RecipeCardLink
                            key={recipeContainer.recipe.uri}
                            label={recipeContainer.recipe.label}
                            href={recipeContainer._links.self.href}
                            image={recipeContainer.recipe.image}
                        />
                    );
                })}
            </Flex>
            <Flex w="full" justify={'right'}>
                <Button
                    onClick={() => {
                        getRecipesByUrl(moreRecipesUrl);
                    }}
                    mr={10}
                    w={'200px'}
                    bg={'blue.400'}
                    color={'white'}
                    rounded={'xl'}
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}
                >
                    Load more recipes
                </Button>
            </Flex>
        </Box>
    );
};

export default RecipeSearch;
