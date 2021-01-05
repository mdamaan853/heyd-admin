import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const listProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const data = await axios.get("http://apis.restroqr.link:4040/product/0/23");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data.result,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.result.message
          ? error.response.data.result.message
          : error.message,
    });
  }
};
