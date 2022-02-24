// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <h2>Dogアプリ</h2>
      犬の画像を表示するサイトです。
      <img src="https://dog.ceo/api/breeds/image/random"></img>
    </div>
  )
}
