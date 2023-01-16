import React from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link';

const ProductDetail = () => {

    const router= useRouter();
    const {productid}= router.query
  return (
    
    <>
    
   <Link href="/product/1" replace>
   <div>detail About {productid}</div>
   </Link>
   <Link href={`/product/${productid}`}>
   <div>detail About {productid}</div>
   </Link>
    
    </>
  )
}

export default ProductDetail