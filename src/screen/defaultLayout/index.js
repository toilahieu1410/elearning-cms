import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../components/defaultLayout/index'
import Loading from '../layout/Loading'
import useToken from '../../utilities/useToken'
import { getUser } from '../../redux/auth/action'

const DefaultLayout = () => {

  const dispatch = useDispatch()
  const {token} = useToken()

  const userInfo = useSelector((store) => store.auth.userInfo)

  useEffect(() => {
    dispatch(getUser(token.username))
  }, [])

  return (
    <div>
      {
        !userInfo ? (
          <Loading/>
        ) : (
          <div>
            <AppSidebar/>
              <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader userInfo={userInfo}/>
                <div className="body flex-grow-1 px-3">
                  <AppContent />
                </div>
                <AppFooter />
              </div>
          </div>
        )}
    </div>
  )
}

export default DefaultLayout