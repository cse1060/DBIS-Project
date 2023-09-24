import React from 'react'

export default function UserProfile({params} : any) {
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Profile Page <span className='p-2 rounded bg-blue-500 text-lg'>{params.id}</span></p>
    </div>
  )
}