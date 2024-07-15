import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './assets/scss/style.scss'
import Loading from './screen/layout/Loading'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useToken from './utilities/useToken'

// Pages
const Login = React.lazy(() => import('./screen/auth/Login'))
const Register = React.lazy(() => import('./screen/auth/Register'))

// Containers
const DefaultLayout = React.lazy(() => import('./screen/defaultLayout/index'))

const App = () => {

  const { token, setToken } = useToken()

  return (
    <BrowserRouter basename={`/`}>
      <React.Suspense fallback={Loading}>
        {
          !token ?
            <Switch>
              <Route exact path="/login" name="Login Page" render={() => <Login setToken={setToken} />} />
              <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />}/>
              <Redirect from="/" to="/login" />
            </Switch>
            :
            <Switch>
              <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
            </Switch>
        }
      </React.Suspense>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  )
}

export default App