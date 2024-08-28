import SideBar from '@/components/SideBar/SideBar'
import React from 'react'

function layout({children}) {
  return <>
    <SideBar/>

    <div className='border'>{children}</div>
  </>
}

export default layout