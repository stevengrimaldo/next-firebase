import React from 'react'
import { Meta } from '@global'

const DefaultLayout = ({ children, className, meta }) => {
  return (
    <>
      {meta && <Meta {...meta} />}
      <main className={className}>{children}</main>
    </>
  )
}

export default DefaultLayout
