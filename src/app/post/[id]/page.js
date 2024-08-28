
import React from 'react'

function page({params}) {
    console.log(params,"params");
    
  return  <>
    <h3> post : params {params.id}</h3>
  
  </>
}

export default page