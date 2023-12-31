import axios from "axios";
import OrdersSlice, { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from "../../redux/Orders/OrdersSlice";
import { BASE_URL } from "../../utils/constants";



export const getOrders = async (dispatch, currentUser) => {


dispatch(fetchOrdersStart())

//console.log(currentUser.token);

try {
    const orders = await axios.get(`${BASE_URL}orders`, {
        headers: {
            'x-token': currentUser.token
        }
    })
    if (orders) {
        dispatch(fetchOrdersSuccess(orders.data.data))
    }
    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail("wooops! no se encontro un usuario"))
    }

}

export const createOrder = async (order, dispatch, currentUser) => {
    try {
        const responce = await axios.post(`${BASE_URL}orders`, order, {
            headers: {
                'x-token': currentUser.token
            }
        })

        if (responce) {
            getOrders(dispatch, currentUser)
        }
    } catch (error) {
        dispatch(createOrderFail())
    }
}