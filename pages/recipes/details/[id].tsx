import {
    Box,
    Stack,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { useState } from 'react';
import { TableRow } from '../../../components/TableRow/TableRow';
import { RecipeDetailsService } from '../../../services';
import { Recipe } from '../../../types';

type RecipeDetailsProps = {
    recipeDetails: {
        recipe: Recipe;
    };
};

const RecipeDetails = ({ recipeDetails }: RecipeDetailsProps) => {
    const [recipe, setRecipe] = useState<Recipe>(recipeDetails.recipe);
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
                    Recipes Details - {recipe.label}
                </Text>
                <TableContainer maxWidth={'full'} whiteSpace={'pre-line'}>
                    <Table variant="simple">
                        <TableCaption>
                            Details of {recipe.label} recipe.
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Detail</Th>
                                <Th>value</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Object.entries(recipe).map(([key, value]) => {
                                return (
                                    <TableRow
                                        key={key}
                                        detail={key}
                                        value={value}
                                    />
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Box>
    );
};

export async function getServerSideProps({ params }: any) {
    const { id } = params;

    const data = await RecipeDetailsService.getRecipesDetailsByParams(id);

    return { props: { recipeDetails: data } };
}

export default RecipeDetails;
