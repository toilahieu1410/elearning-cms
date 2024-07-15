import { SIDEBAR_SHOW } from '../types'

const initialState = {
  sidebarShow: true,
}

const sideBar = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case SIDEBAR_SHOW:
      return {
        ...state,
        ...rest
      }
    default:
      return state
  }
}

export default sideBar