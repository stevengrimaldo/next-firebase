import React from 'react'
import DefaultLayout from './default'

const BasicLayout = ({ children, ...props }) => {
  return <DefaultLayout {...props}>{children}</DefaultLayout>
}

export default BasicLayout
