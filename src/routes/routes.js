import Home from '../components/pages/Home'
import Hello2 from '../components/pages/Hello2'
import SheetView from '../components/pages/sheetView'
import SheetEdit from '../components/pages/SheetEdit'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/h2',
    component: Hello2
  },
  {
    path: '/sheet/view',
    component: SheetView
  },
  {
    path: '/sheet/edit',
    component: SheetEdit
  }
]
