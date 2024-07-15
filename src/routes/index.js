import React from 'react'

const Dashboard = React.lazy(() => import('../screen/dashbord/index'))
const DanhMuc = React.lazy(() => import('../screen/danhMuc/index'))
const CalendarScreen = React.lazy(() => import('../screen/calendar/index'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/ql-danh-muc', name: 'Danh Mục', component: DanhMuc },
  { path: '/calendar', name: 'Lịch học', component: CalendarScreen },
]

export default routes