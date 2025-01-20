import React from 'react'

//Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Toggle = React.lazy(() => import('./views/base/toggle/Toggle'))
const Injection = React.lazy(() => import('./views/base/injection/Injection'))

//Components
const Preventive = React.lazy(() => import('./views/preventive/Preventive'))
const History = React.lazy(() => import('./views/history/History'))

//Summary Production
const Production = React.lazy(() => import('./views/production/Production'))

// Notifications
const Notification = React.lazy(() => import('./views/notifications/notification'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base/injection', name: 'Injection', element: Injection },
  { path: '/base/toggle', name: 'Toggle', element: Toggle },
  { path: '/preventive', name: 'Preventive', element: Preventive },
  { path: '/history', name: 'History', element: History },
  { path: '/production', name: 'Production', element: Production },
  { path: '/notifications', name: 'Notification', element: Notification },
]

export default routes
