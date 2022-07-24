import axios from 'axios';
import { httpApiRecipeGetRequest } from '../helpers/AxiosInstance';
import { RecipesRequestParams } from '../types';

const getRecipesByUrl = async (url: string) => {
    const response = await axios.get(url).then((response) => {
        return response.data;
    });
    return response;
};

const getRecipesByParams = async (inputParams: RecipesRequestParams) => {
    const response = await httpApiRecipeGetRequest
        .get('https://api.edamam.com/api/recipes/v2', { params: inputParams })
        .then((response) => {
            return response.data;
        });
    return response;
};

export const RecipeService = {
    getRecipesByUrl: getRecipesByUrl,
    getRecipesByParams: getRecipesByParams,
};
