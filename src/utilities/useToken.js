import { useState, useEffect } from "react"
import jwt from 'jsonwebtoken'

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token')
    const tokenJson  = jwt.decode(JSON.parse(tokenString))
    const now = new Date()
    if(tokenJson) {
      if(now.getTime() > tokenJson.expiry) {
        sessionStorage.clear()
        setTimeout(() => {
          window.location.href = '/login'
        }, 200)
      }
      return tokenJson.userToken
    }
    return null
  }

  const [token, setToken] = useState(getToken())
  useEffect(() => {
    const token = getToken()
    setToken(token)
  }, [])

  const saveToken = userToken => {
    const now = new Date()
    const ttl = 12 * 3600 * 1000
    const dataToken = jwt.sign({
      userToken: userToken,
      expiry: now.getTime() + ttl
    }, 'secret')
    sessionStorage.setItem('token', JSON.stringify(dataToken));
    setToken(dataToken.userToken)
    setTimeout(() => {
      window.location.href = `/dashboard`
    }, 200);
  }

  return {
    setToken: saveToken,
    token
  }
}

export default useToken