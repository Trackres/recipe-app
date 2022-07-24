import { httpApiRecipeGetRequest } from '../helpers/AxiosInstance';

const getRecipesDetailsByParams = async (id: string) => {
    const response = await httpApiRecipeGetRequest
        .get('https://api.edamam.com/api/recipes/v2/' + id)
        .then((response) => {
            return response.data;
        });
    return response;
};

export const RecipeDetailsService = {
    getRecipesDetailsByParams: getRecipesDetailsByParams,
};
