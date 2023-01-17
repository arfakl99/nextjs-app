import React from 'react'

const User = () => {
  return (
    <>
    <h1>User</h1>
    </>
  )
}

export default User

export async function geStaticProps(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data)
}