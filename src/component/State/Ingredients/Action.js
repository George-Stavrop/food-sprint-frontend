import { _API_URL, api } from "../../config/api";
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionType";

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const res = await api.get(
                `/api/admin/ingredients/restaurant/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                }
            );
            console.log("ingredients", res.data);
            dispatch({ type: GET_INGREDIENTS, payload: res.data })
        } catch (error) {
            console.log("error", error);

        }
    }
}

export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const res = await api.post(
                `/api/admin/ingredients`, data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                }
            );
            console.log("create ingredients", res.data);
            dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: res.data })
        } catch (error) {
            console.log("error", error);

        }
    }
}

export const createIngredientCategory = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const res = await api.post(
                `/api/admin/ingredients/category`, data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                }
            );
            console.log("create ingredients category", res.data);
            dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: res.data })
        } catch (error) {
            console.log("error", error);

        }
    }
}

export const getIngredientCategory = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const res = await api.get(
                `/api/admin/ingredients/restaurant/${id}/category`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                }
            );
            console.log("ingredient category", res.data);
            dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: res.data })
        } catch (error) {
            console.log("error", error);

        }
    }
}

export const updateStockOfIngredient = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.put(
                `/api/admin/ingredients/restaurant/${id}/stock`, {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                }
            );

            dispatch({ type: UPDATE_STOCK, payload: data })
        } catch (error) {
            console.log("error", error);

        }
    }
}