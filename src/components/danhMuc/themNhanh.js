import React from "react"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import useToken from '../../utilities/useToken'
import { CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react"
import { Button, Col, Form, Label, Row } from "reactstrap"
import {postDanhMuc} from '../../redux/danhMuc/action'

const ThemNhanh = (props) => {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const {handleShowModal, showModal, id, loadNhanh} = props
  const {token} = useToken()

  const onSubmit = (data) => {
    const obj = {
      ID_KHOA_HOC_CHA: id,
      SLUG: null,
      LINK_VIDEO: null,
      NGUOI_THUYET_TRINH: null,
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
        <CModalTitle>Thêm Nhánh</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Tên nhánh</Label>
            </Col>
            <Col xs="9">
              <input
                type="text"
                className=" form-control"
                placeholder="Tên nhánh"
                {...register('TIEU_DE_KHOA_HOC', {required: 'Chưa nhập giá trị'})}
              />
          </Col>
          </Row>
          <Row className="my-2 align-items-center">
            <Col xs="3">
              <Label>Nội dung nhánh</Label>
            </Col>
            <Col xs="9">
              <input
                type="text"
                className=" form-control"
                placeholder="Nội dung nhánh"
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
                  <option value={'Khóa học con'}>Khóa học con</option>
                  <option value={'Bài học'}>Bài học</option>
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

export default ThemNhanh