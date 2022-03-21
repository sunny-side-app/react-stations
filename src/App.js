// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import './App.css'

import { Description } from './Description'
import { DogListContainer } from './DogListContainer'
import { Header } from './Header'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}
