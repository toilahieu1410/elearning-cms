import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import useToken from '../../utilities/useToken'
import { CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react"
import { Button, Col, Form, Label, Row } from "reactstrap"
import { _getFindUser } from '../../api/auth'
import { postDanhMuc } from '../../redux/danhMuc/action'

const ThemVideo = (props) => {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const {handleShowModal, showModal, id, loadNhanh} = props
  const {token} = useToken()

  const [tukhoa, setTukhoa] = useState('')
  const [findUser, setFindUser] = useState([])

  const funcFindUser = () => {
    _getFindUser(tukhoa).then((res) => {
      setFindUser(res)
    })
  }

  const onSubmit = (data) => {
    const obj = {
      ID_KHOA_HOC_CHA: id,
      SLUG: null,
      NGUOI_TAO: token.username,
      THOI_LUONG: null,
      MA_NHOM: null,
      MA_PHONG_BAN: null
    }
    const body = Object.assign(obj, data)
    dispatch(postDanhMuc(body)).then(() => {
      handleShowModal()
      loadNhanh(body.ID_KHOA_HOC_CHA)
    })
  }

  return (
    <CModal visible={showModal}>
      <CModalHeader>
        <CModalTitle>Thêm Video</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Tên Video</Label>
            </Col>
            <Col xs="9">
              <input
                type="text"
                className=" form-control"
                placeholder="Tên video"
                {...register('TIEU_DE_KHOA_HOC', {required: 'Chưa nhập giá trị'})}
              />
          </Col>
          </Row>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Nội dung Video</Label>
            </Col>
            <Col xs="9">
              <input
                type="text"
                className=" form-control"
                placeholder="Nội dung video"
                {...register('NOI_DUNG_KHOA_HOC', {required: 'Chưa nhập giá trị'})}
              />
          </Col>
          </Row>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Ảnh mô tả</Label>
            </Col>
            <Col xs="9">
              <input
                type="text"
                className=" form-control"
                placeholder="Ảnh mô tả"
                {...register('LINK_ANH_BACKGROUND', {required: 'Chưa nhập giá trị'})}
              />
          </Col>
          </Row>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Loại khóa học</Label>
            </Col>
            <Col xs="9">
              <select
                type="select"
                className=" form-control"
                {...register('loaikhoahoc')}>
                  <option value={'video'}>Video</option>
                  <option value={'powerpoint'}>Powerpoint</option>
              </select>
          </Col>
          </Row>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Link video</Label>
            </Col>
            <Col xs="9">
              <input
                type="text"
                className=" form-control"
                placeholder="Link video"
                {...register('LINK_VIDEO', {required: 'Chưa nhập giá trị'})}
              />
          </Col>
          </Row>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Người thuyết trình</Label>
            </Col>
            <Col xs="9">
              <input
                type="text"
                className=" form-control"
                placeholder="Người thuyết trình"
                value={tukhoa}
                onChange={(e) => {
                  setTukhoa(e.target.value)
                  funcFindUser()
                }}
              />
              <select
                type="select"
                className=" form-control"
                {...register('NGUOI_THUYET_TRINH')}>
                  {findUser.map((item, index) => (
                    <option key={index} value={item.USERNAME}>{item.USERNAME} - {item.HO_VA_TEN}</option>
                  ))}
              </select>
          </Col>
          </Row>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Phân loại</Label>
            </Col>
            <Col xs="9">
              <select
                type="select"
                className=" form-control"
                {...register('PHAN_LOAI_KHOA_HOC')}>
                  <option value={'Chung'}>Khóa học chung</option>
                  <option value={'Phòng ban'}>Khóa học phòng ban</option>
              </select>
          </Col>
          </Row>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Thứ tự</Label>
            </Col>
            <Col xs="9">
              <input
                type="text"
                className=" form-control"
                placeholder="0"
                {...register('SORT_ORDER', {required: 'Chưa nhập giá trị'})}
              />
          </Col>
          </Row>
          <Row className="align-items-center">
          <Col xs="3"></Col>
          <Col xs="9 d-flex" style={{justifyContent: 'flex-end'}}>
            <button  className='btn button-add-cater text-white mx-2'>
              Thêm 
            </button>
            <Button className='button-close text-white' onClick={handleShowModal}>
              Đóng
            </Button>
          </Col>
        </Row>
        </Form>
      </CModalBody>
    </CModal>
  )

}

export default ThemVideo