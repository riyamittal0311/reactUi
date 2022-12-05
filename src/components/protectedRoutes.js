import React from 'react'

import { Navigate ,Outlet} from 'react-router-dom'

 
const ProtectedRoutes=({children})=>{
 const token = JSON.parse(localStorage.getItem('token'))
 console.log('token',token)
 if (!token) {
  return <Navigate to='/login' replace />;
}


return children ? children : <Outlet />;

}

export default ProtectedRoutes;