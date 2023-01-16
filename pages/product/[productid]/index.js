import React from 'react'
import Router, { useRouter } from 'next/router'

const ProductDetail = () => {

    const router= useRouter();
    const {productid}= router.query
  return (
    
    <>
    
   
    <div>detail About {productid}</div>
    </>
  )
}

export default ProductDetail