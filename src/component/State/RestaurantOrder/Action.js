import { api } from "../../config/api"
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType"

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

            const res = await api.put(
                `api/admin/order/${orderId}/${orderStatus}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
            }
            );

            const updatedOrder = res.data;
            console.log("updated order", updatedOrder);

            dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updatedOrder });
        } catch (error) {
            console.log("error", error);
            dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, error })
        }

    }
}

export const fetchRestaurantOrder = ({ restaurantId, orderStatus, jwt }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });

            const { data } = await api.get(
                `api/admin/order/restaurant/${restaurantId}`, {
                params: { order_status: orderStatus },
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
            }
            );

            const orders = data;
            console.log("restaurant order---", orders);

            dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: orders });
        } catch (error) {
            console.log("error", error);
            dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, error })
        }

    }
}