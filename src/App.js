// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */

const INITIAL_URL =
  'https://images.dog.ceo/breeds/terrier-dandie/n02096437_1641.jpg'
const UPDATE_URL =
  'https://images.dog.ceo/breeds/poodle-standard/n02113799_2139.jpg'

export const App = () => {
  const [dogUrl, setDogUrl] = useState(INITIAL_URL)

  const urlReset = () => setDogUrl(INITIAL_URL)
  const updateDogUrl = () => setDogUrl(UPDATE_URL)

  return (
    <div>
      <header></header>
      <h2>Dogアプリ</h2>
      <p>
        犬の画像を表示するサイトです。
        <br />
        <img src={dogUrl}></img>
        <br />
        <button onClick={updateDogUrl}>update</button>
      </p>
    </div>
  )
}
