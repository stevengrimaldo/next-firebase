import React from 'react'
import Head from 'next/head'

const Meta = ({ meta }) => (
  <Head>
    <title>{meta.title}</title>
    <meta content={meta.description} name="description" />
    {meta.children}
  </Head>
)

export default Meta
