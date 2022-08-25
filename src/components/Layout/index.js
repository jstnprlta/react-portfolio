import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>Welcome to My Portfolio</span>

        <Outlet />

        <span className='tags bottom-tags'>Created By:<br/ >
        <span className='bottom-tag-html'>Justin C. Peralta 8/22</span>
        </span>
      </div>
    </>
  )
}

export default Layout
