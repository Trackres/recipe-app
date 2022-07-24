import { Recipe, RecipeLink } from './index';

export type RecipeSearchResult = {
    recipe: Recipe;
    _links: RecipeLink;
};
