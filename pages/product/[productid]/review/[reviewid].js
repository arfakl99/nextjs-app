import React from 'react'
import { useRouter } from 'next/router'

const Review = () => {

    const router=useRouter()
    const {productid,reviewid}=router.query
  return (
    <div>product is {productid}Review is n{reviewid}</div>
  )
}

export default Review