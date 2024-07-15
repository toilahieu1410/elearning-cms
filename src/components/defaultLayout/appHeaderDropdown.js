import React from "react"
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilLockLocked,
  cilSettings,
  cilUser,
} from '@coreui/icons'
import { toast } from 'react-toastify'
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = (props) => {

  const {userInfo} = props

  const logout = () => {
    sessionStorage.clear()
    toast.success('Đăng xuất thành công!')
    setTimeout(() => {
      window.location.href = '/login'
    }, 200)
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={`${process.env.REACT_APP_IMAGES}${userInfo.AVATAR}`} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{userInfo.EMAIL_CONG_TY}</CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2"/>
          Thông tin tài khoản
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilSettings} className="me-2"/>
          Cài đặt
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={() => logout()}>
          <CIcon icon={cilLockLocked} className="me-2"/>
          Đăng xuất
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown