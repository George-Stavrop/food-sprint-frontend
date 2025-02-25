import { api } from "../../config/api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes"

export const createOrderCard = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST });
        try {
            const { data } = await api.post(`/api/order`, reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                    "Content-Type": "application/json"
                },
            });
            if (data.payment_url) {
                console.log("Redirecting to payment:", data.payment_url);
                await new Promise((resolve) => setTimeout(resolve, 500));
                window.location.href = data.payment_url;
            }
            console.log("created order", data)
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        } catch (error) {
            console.log("error", error);
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error })
        }
    }
}

export const createOrderCash = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST });
        try {
            const { data } = await api.post(`/api/order`, reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                    "Content-Type": "application/json"
                },
            });

            console.log("created order", data)
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })

        } catch (error) {
            console.log("error", error);
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error })
            throw error;
        }
    }
}

export const getUsersOrder = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_USERS_ORDERS_REQUEST });
        try {
            const { data } = await api.get(`/api/order/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            console.log("users order", data)
            dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data })
        } catch (error) {
            console.log("error", error);
            dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error })
        }
    }
}