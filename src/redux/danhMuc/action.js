import {
  _getDanhMuc,
  _postDanhMuc,
  _putDanhMuc,
  _deleteDanhMuc,
  _getNhanh,
  _getDetail
} from '../../api/danhMuc'

import {
  GET_DANH_MUC,
  POST_DANH_MUC,
  PUT_DANH_MUC,
  DELETE_DANH_MUC,
  GET_NHANH,
  GET_DETAIL
} from '../types'
import { toast } from 'react-toastify'

export const getDanhMuc = (body) => async dispatch => {
  try {
    _getDanhMuc(body).then(async (res) => {
      return dispatch({ type: GET_DANH_MUC, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const postDanhMuc = (body) => async dispatch => {
  try {
    _postDanhMuc(body).then(async (res) => {
      if(res.status === 200) {
        toast.success(res.data)
        return dispatch({type: POST_DANH_MUC})
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const putDanhMuc = (body) => async dispatch => {
  try {
    _putDanhMuc(body).then(async (res) => {
      if(res.status === 200) {
        toast.success(res.data)
        return dispatch({type: PUT_DANH_MUC})
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteDanhMuc = (id) => async dispatch => {
  try {
    _deleteDanhMuc(id).then(async (res) => {
      if(res.status === 200) {
        toast.success(res.data)
        return dispatch({type: DELETE_DANH_MUC})
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getNhanh = (body) => async dispatch => {
  try {
    _getNhanh(body).then(async (res) => {
      return dispatch({type: GET_NHANH, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getDetail = (id) => async dispatch => {
  try {
    _getDetail(id).then(async (res) => {
      return dispatch({type: GET_DETAIL, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}