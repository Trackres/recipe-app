import {
    Box,
    Stack,
    Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { RecipeDetailsService } from '../../../services';
import { Recipe } from '../../../types';

type RecipeDetailsProps = {
    recipeDetails: {
        recipe: Recipe;
    };
};

const RecipeDetails = ({ recipeDetails }: RecipeDetailsProps) => {
    console.log(recipeDetails);
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
                    Recipes Details - {recipeDetails.recipe.label}
                </Text>
                <TableContainer maxWidth={'full'} overflowWrap={'break-word'}>
                    <Table variant="simple">
                        <TableCaption>
                            Details of {recipeDetails.recipe.label} recipe.
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Detail</Th>
                                <Th>value</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Object.entries(recipeDetails.recipe).map(
                                ([key, value]) => {
                                    return (
                                        <Tr>
                                            <Td>{key}</Td>
                                            <Td>{JSON.stringify(value)}</Td>
                                        </Tr>
                                    );
                                }
                            )}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>Detail</Th>
                                <Th>value</Th>
                            </Tr>
                        </Tfoot>
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
