import {
  GET_DANH_MUC,
  POST_DANH_MUC,
  PUT_DANH_MUC,
  DELETE_DANH_MUC,
  GET_NHANH,
  GET_DETAIL
} from '../types'

const initialState = {
  listDanhMuc: [],
  listNhanh: [],
  detailId: {}
}

const danhMuc = (state = initialState, action) => {
  switch (action.type) {
    case GET_DANH_MUC:
      return {
        ...state,
        listDanhMuc: action.data
      }
    case POST_DANH_MUC:
      return {
        ...state
      }
    case PUT_DANH_MUC:
      return {
        ...state
      }
    case DELETE_DANH_MUC:
      return {
        ...state
      }
    case GET_NHANH:
      return {
        ...state,
        listNhanh: action.data
      }
    case GET_DETAIL:
      return {
        ...state,
        detailId: action.data
      }
    default: {
      return state
    }
  }
}


export default danhMuc