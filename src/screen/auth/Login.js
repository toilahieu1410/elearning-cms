import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { toast } from 'react-toastify'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { _getLogin } from '../../api/auth'

const Login = ({setToken}) => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const body = { username: username, password: password }
    _getLogin(body)
      .then((res) => {
        if( res.notification.indexOf('Đăng nhập thành công') !== -1) {
          const token = { 
            username: res.user.USERNAME,
            macongty: res.user.MA_CONG_TY, 
            hoTen: res.user.HO_VA_TEN, 
            avatar: res.user.AVATAR,
            admin: res.user.IS_ADMIN,
            lock: res.user.LOCK
          }
          setToken(token)
        } else {
          toast.success(res.notification)
        }
      })
  }

  useEffect(() => {
    const listener = async (event) => {
      if(event.code === "Enter" || event.code === "NumpadEnter") {
       handleSubmit();
      }
    };
    document.addEventListener("keypress", listener);
    return () => {
    document.removeEventListener("keypress", listener)
    };
  },[])


  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="Username" 
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type='button'  onClick={() => handleSubmit()} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}