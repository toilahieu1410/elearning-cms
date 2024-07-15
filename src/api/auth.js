import { API_CMS, API_LOCAL, axiosIntance } from './auth-header'

export const _getLogin = async (body) => {
  const request = await axiosIntance.get(`${API_CMS}/api/Api_NhanVien/LoginERP/${body.username}/${body.password}`)
  return request.data
}

export const _getUser = async (username) => {
  const request = await axiosIntance.get(`${API_CMS}/api/Api_NhanVien/GetChiTietNhanVien/${username}`)
  return request.data
}

export const _getFindUser = async (tukhoa) => {
  console.log(tukhoa)
  const request = await axiosIntance.post(`${API_LOCAL}/api/Api_NhanVien/TimKiemNhanVien`, {
    tukhoa: tukhoa
  })
  return request.data
}