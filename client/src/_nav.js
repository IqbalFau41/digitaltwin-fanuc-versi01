import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilFax,
  cilEqualizer,
  cilLan,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Dashboard',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Engine Parts',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Injection Mould',
        to: '/base/injection',
      },
      {
        component: CNavItem,
        name: 'Pin Toogle',
        to: '/base/toggle',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'Digital Twin Analytics',
    to: '/preventive',
    icon: <CIcon icon={cilEqualizer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'History',
    to: '/history',
    icon: <CIcon icon={cilFax} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Production',
    to: '/production',
    icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notification',
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'About',
        to: '/about',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
