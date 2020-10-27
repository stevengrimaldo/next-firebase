import 'babel-polyfill'
import 'whatwg-fetch'
import 'intersection-observer'
import React from 'react'
import NextApp from 'next/app'
import firebase from 'firebase/app'
import 'firebase/auth'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '@global'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'placeholder',
    appId: 'placeholder',
    authDomain: 'placeholder',
    databaseURL: 'placeholder',
    measurementId: 'placeholder',
    messagingSenderId: 'placeholder',
    projectId: 'placeholder',
    storageBucket: 'placeholder',
  })
}

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
