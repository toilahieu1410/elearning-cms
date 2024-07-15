import { API_CMS, API_LOCAL, axiosIntance } from './auth-header'

export const _getDanhMuc = async (body) => {
  const request = await axiosIntance.post(`${API_LOCAL}/api/Api_Elearning/LoadDanhSachKhoaHoc`, body)
  return request.data
}

export const _postDanhMuc = async (body) => {
  const request = await axiosIntance.post(`${API_LOCAL}/api/Api_Elearning/TaoKhoaHoc`, body)
  return request
}

export const _putDanhMuc = async (body) => {
  const request = await axiosIntance.post(`${API_LOCAL}/api/Api_Elearning/SuaKhoaHoc`, body)
  return request.data
}

export const _deleteDanhMuc = async (id) => {
  const request = await axiosIntance.post(`${API_LOCAL}/api/Api_Elearning/XoaKhoaHoc`, {
    ID: id
  })
  return request
}

export const _getNhanh = async (body) => {
  const request = await axiosIntance.post(`${API_LOCAL}/api/Api_Elearning/LoadDanhSachBaiHocCon`, body)
  return request.data
}

export const _getDetail = async (id) => {
  const request = await axiosIntance.post(`${API_LOCAL}/api/Api_Elearning/LoadChiTietKhoaHoc`, {
    id: id
  })
  return request.data
}