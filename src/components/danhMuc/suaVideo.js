import React from "react"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import useToken from '../../utilities/useToken'
import { CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react"
import { Button, Col, Form, Label, Row } from "reactstrap"
import {putDanhMuc} from '../../redux/danhMuc/action'

const SuaVideo = (props) => {

  const dispatch = useDispatch()
  const {handleShowModal, showModal, id, loadNhanhCha, item} = props
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: item
  })
  const {token} = useToken()

  const onSubmit = (data) => {
    const body = {
      ID: data.ID,
      TIEU_DE_KHOA_HOC: data.TIEU_DE_KHOA_HOC,
      NOI_DUNG_KHOA_HOC: data.NOI_DUNG_KHOA_HOC,
      LINK_ANH_BACKGROUND: data.LINK_ANH_BACKGROUND,
      LINK_VIDEO: data.LINK_VIDEO,
      SLUG: data.SLUG,
      NGUOI_TAO: token.username,
      NGUOI_THUYET_TRINH: data.NGUOI_THUYET_TRINH,
      SORT_ORDER: data.SORT_ORDER
    }
    dispatch(putDanhMuc(body)).then(() => {
      handleShowModal()
      loadNhanhCha(data.ID_KHOA_HOC_CHA)
    })
 
  }

  return (
    <CModal visible={showModal}>
      <CModalHeader>
        <CModalTitle>Sửa Video</CModalTitle>
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
                {...register('NGUOI_TAO')}
              />
          </Col>
          </Row>
          <Row className="align-items-center">
          <Col xs="3"></Col>
          <Col xs="9 d-flex" style={{justifyContent: 'flex-end'}}>
            <button  className='btn button-add-cater text-white mx-2'>
              Lưu
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

export default SuaVideo