import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Copyright</span>
        <span className="ms-1">&copy; 2021. </span>
        <a href="https://hoplongtech.com/" target="_blank" rel="noopener noreferrer">
          HopLong-Elearning
        </a>
        <span className="ms-1">All rights reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Version 1.0</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
