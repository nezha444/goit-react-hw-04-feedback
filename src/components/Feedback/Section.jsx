import React from 'react'

export const Section = ({title, children}) => {
  return (
    <>
      <h6>{title}</h6>
      {children}
    </>
  )
}
