import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDanhMuc, deleteDanhMuc } from '../../redux/danhMuc/action'
import { _getNhanh } from '../../api/danhMuc'
import useToken from '../../utilities/useToken'
import { CCard } from '@coreui/react'
import { Button } from "reactstrap"
import CIcon from '@coreui/icons-react';
import {cilPlus , cilPencil, cilTrash} from '@coreui/icons'
import ThemDanhMuc from '../../components/danhMuc/themDanhMuc'
import SuaDanhMuc from '../../components/danhMuc/suaDanhMuc'
import ThemNhanh from '../../components/danhMuc/themNhanh'
import ThemVideo from '../../components/danhMuc/themVideo'
import SuaNhanh from '../../components/danhMuc/suaNhanh'
import SuaVideo from '../../components/danhMuc/suaVideo'

const sobanghi = 0

const DanhMuc = () => {

  const dispatch = useDispatch()

  const {token} = useToken()

  const listDanhMuc = useSelector((store) => store.danhMuc.listDanhMuc)

  const [list2, setList2] = useState([])
  const [list3, setList3] = useState([])
  const [list4, setList4] = useState([])
  const [list5, setList5] = useState([])
  const [list6, setList6] = useState([])
  const [list7, setList7] = useState([])

  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => setShowModal(!showModal)

  useEffect(() => {
    const body = {
      macongty: token.macongty,
      username: token.username,
      tukhoa: ''
    }
    dispatch(getDanhMuc(body))
  }, [])

  const loadDanhMuc = () => {
    const body = {
      macongty: token.macongty,
      username: token.username,
      tukhoa: ''
    }
    dispatch(getDanhMuc(body))
  }

  const loadNhanh2 = (id) => {
    const body = {
      id: id,
      sobanghi: sobanghi
    }
    setList3([])
    setList4([])
    setList5([])
    setList6([])
    setList7([])
    _getNhanh(body).then((res) => {
        setList2(res)
    } )
  }

  const loadNhanh3 = (id) => {
    const body = {
      id: id,
      sobanghi: sobanghi
    }
    setList4([])
    setList5([])
    setList6([])
    setList7([])
    _getNhanh(body).then((res) => {
        setList3(res)
    })
  }

  const loadNhanh4 = (id) => {
    const body = {
      id: id,
      sobanghi: sobanghi
    }
    setList5([])
    setList6([])
    setList7([])
    _getNhanh(body).then((res) => {
        setList4(res)
    })
  }

  const loadNhanh5 = (id) => {
    const body = {
      id: id,
      sobanghi: sobanghi
    }
    setList6([])
    setList7([])
    _getNhanh(body).then((res) => {
        setList5(res)
    })
  }

  const loadNhanh6 = (id) => {
    const body = {
      id: id,
      sobanghi: sobanghi
    }
    setList7([])
    _getNhanh(body).then((res) => {
        setList6(res)
    })
  }

  const loadNhanh7 = (id) => {
    const body = {
      id: id,
      sobanghi: sobanghi
    }
    _getNhanh(body).then((res) => {
        setList7(res)
    })
  }

  const loadNhanh8 = (id) => {
    console.log(id)
  }

  return (
    <CCard className='p-3' style={{height: '80vh'}}>
      <div className='w-100'>
        <Button className='button-add d-flex float-end' onClick={handleShowModal}>
          <label className='text-white'>Thêm danh mục</label>
        </Button>
        
      </div>
      <div className='px-3 py-4 d-flex' style={{overflowX:'auto', overflowY:'auto'}}>
        <div className='category border' style={{
          minWidth: 650,
          overflowY:'auto'
          }}>
          <div className='col-foem-label text-center w-100 mb-4'>
            <label className='category-title'>Level 1</label>
          </div>
          
          {
            listDanhMuc.map((item, index) => (
              <ListDanhMuc key={index} item={item} loadNhanh2={loadNhanh2} loadDanhMuc={loadDanhMuc}/>
            ))
          }
        </div>

        {list2.length > 0 && (
          <Nhanh data={list2} title={'Level 2'} loadNhanh={loadNhanh3} loadNhanhCha={loadNhanh2}/>
        )}

        {list3.length > 0 && (
          <Nhanh data={list3} title={'Level 3'} loadNhanh={loadNhanh4} loadNhanhCha={loadNhanh3}/>
        )}

        {list4.length > 0 && (
          <Nhanh data={list4} title={'Level 4'} loadNhanh={loadNhanh5} loadNhanhCha={loadNhanh4}/>
        )}

        {list5.length > 0 && (
          <Nhanh data={list5} title={'Level 5'} loadNhanh={loadNhanh6} loadNhanhCha={loadNhanh5}/>
        )}

        {list6.length > 0 && (
          <Nhanh data={list6} title={'Level 6'} loadNhanh={loadNhanh7} loadNhanhCha={loadNhanh6}/>
        )}

        {list7.length > 0 && (
          <Nhanh data={list7} title={'Level 7'} loadNhanh={loadNhanh8} loadNhanhCha={loadNhanh7}/>
        )}
        
      </div>
     
     {/* add danh muc */}
     <ThemDanhMuc handleShowModal={handleShowModal} showModal={showModal} loadDanhMuc={loadDanhMuc}/>
    </CCard>
  )
}

export default DanhMuc

const ListDanhMuc = (props) => {

  const dispatch = useDispatch()

  const { item, loadNhanh2, loadDanhMuc } = props
  const [ showModal, setShowModal ] = useState(false)
  const handleShowModal = () => setShowModal(!showModal)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const handleShowModalEdit = () => setShowModalEdit(!showModalEdit)

  const deleteItem = (id) => {
    const result = window.confirm('Bạn có chắc chắn muốn xóa?')
    if(result) {
      dispatch(deleteDanhMuc(id)).then(() => {
        loadDanhMuc()
      })
    }
  }

  return (
    <div className='d-flex my-1 mx-2'>
      <Button className='button-primary' onClick={() => loadNhanh2(item.ID)}>
        {
          item.SORT_ORDER ? (
            <label className='text-white'>{item.TIEU_DE_KHOA_HOC} - {item.SORT_ORDER}</label>
          ) : (
            <label className='text-white'>{item.TIEU_DE_KHOA_HOC}</label>
          )
        }
        
      </Button>
      {
        item.PHAN_LOAI_KHOA_HOC === 'Chung' ? (
          <div>
            <Button className='button-default mx-1' onClick={() => handleShowModalEdit()}>
              <CIcon icon={cilPencil} height={16} width={16} />
            </Button>
            <Button className='button-default mx-1'  onClick={() => deleteItem(item.ID)}>
              <CIcon icon={cilTrash} height={16} width={16} />
            </Button>
          </div>
        ) : (
          <div>
            <Button disabled className='button-default mx-1'>
              <CIcon icon={cilPencil} height={16} width={16} />
            </Button>
            <Button disabled className='button-default mx-1'  onClick={() => deleteItem(item.ID)}>
              <CIcon icon={cilTrash} height={16} width={16} />
            </Button>
          </div>
        )
      }
      
      <Button className='mx-1 button-info' onClick={() => handleShowModal()}>
        <label className='text-white'><CIcon icon={cilPlus} height={16} width={16} />Nhánh</label>
      </Button>
      <ThemNhanh showModal={showModal} handleShowModal={handleShowModal} id={item.ID} loadNhanh={loadNhanh2} />
      <SuaDanhMuc showModal={showModalEdit} handleShowModal={handleShowModalEdit} loadDanhMuc={loadDanhMuc} item={item}/>
    </div>
  )
}

const Nhanh = (props) => {

  const dispatch = useDispatch()
  const {data, title, loadNhanh, loadNhanhCha} = props

  const deleteItem = (id, id_cha) => {
    const result = window.confirm('Bạn có chắc chắn muốn xóa?')
    if(result) {
      dispatch(deleteDanhMuc(id)).then(() => {
        loadNhanhCha(id_cha)
      })
    }
  }

  return (
    <div className='category border' style={{
      minWidth: 650,
      overflowY:'auto'
      }}>
      <div className='col-form-label text-center w-100 mb-4'>
        <label className='category-title'>{title}</label>
      </div>
      
        {
          data.map((item, index) => (
            <NhanhItem key={index} item={item} loadNhanh={loadNhanh} deleteItem={deleteItem} loadNhanhCha={loadNhanhCha}/>
          ))
        }
    </div>
  )
}

const NhanhItem = (props) => {

  const {item, loadNhanh, deleteItem, loadNhanhCha} = props
  const [ showModal, setShowModal ] = useState(false)
  const handleShowModal = () => setShowModal(!showModal)

  const [showVideo, setShowVideo] = useState(false)
  const handleShowVideo = () => setShowVideo(!showVideo)

  const [suaNhanh, setSuaNhanh] = useState(false)
  const handleSuaNhanh = () => setSuaNhanh(!suaNhanh)
  
  const [suaVideo, setSuaVideo] = useState(false)
  const handleSuaVideo = () => setSuaVideo(!suaVideo)

  return (
    <div className='d-flex my-1 mx-2' >
      {
        item.LEVEL !== 4 ? (
          <div>
            <Button className='button-primary' onClick={() => loadNhanh(item.ID)}>
              <label className='text-white'>{item.TIEU_DE_KHOA_HOC} - {item.SORT_ORDER}</label>
            </Button>
            <Button className='button-default  mx-1' onClick={() => handleSuaNhanh()}>
              <CIcon icon={cilPencil} height={16} width={16} />
            </Button>
          </div>
          
        ) : (
          <div>
            <Button className='button-primary'>
              <label className='text-white'>{item.TIEU_DE_KHOA_HOC} - {item.SORT_ORDER}</label>
            </Button>
            <Button className='button-default  mx-1' onClick={() => handleSuaVideo()}>
              <CIcon icon={cilPencil} height={16} width={16} />
            </Button>
          </div>
          
        )
      }
      <Button className='button-default mx-1' onClick={() => deleteItem(item.ID, item.ID_KHOA_HOC_CHA)}>
        <CIcon icon={cilTrash} height={16} width={16} />
      </Button>
      {
        item.LEVEL === 2 && (
          <Button className='mx-1 button-info' onClick={() => handleShowModal()}>
            <label className='text-white'><CIcon icon={cilPlus} height={16} width={16} />Nhánh</label>
          </Button>
        )
      }
      {
        item.LEVEL === 3 && (
          <Button  className='mx-1 button-info' onClick={() => handleShowVideo()}>
            <label className='text-white'><CIcon icon={cilPlus} height={16} width={16} />Video</label>
          </Button>
        )
      }
      <ThemNhanh showModal={showModal} handleShowModal={handleShowModal} id={item.ID} loadNhanh={loadNhanh} />
      <ThemVideo showModal={showVideo} handleShowModal={handleShowVideo} id={item.ID} loadNhanh={loadNhanh}/>
      {
        suaNhanh && (
          <SuaNhanh showModal={suaNhanh} handleShowModal={handleSuaNhanh} id={item.ID} loadNhanhCha={loadNhanhCha} item={item}/>
        )
      }
      {
        suaVideo && (
          <SuaVideo showModal={suaVideo} handleShowModal={handleSuaVideo} id={item.ID} loadNhanhCha={loadNhanhCha} item={item}/>
        )
      }
  </div>
  )
}