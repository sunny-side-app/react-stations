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
// const UPDATE_URL =
//   'https://images.dog.ceo/breeds/poodle-standard/n02113799_2139.jpg'
const DOG_API = 'https://dog.ceo/api/breeds/image/random'

export const App = () => {
  const [dogUrl, setDogUrl] = useState(INITIAL_URL)

  const updateDogUrl = () => {
    fetch(DOG_API)
      .then(response => {
        // console.log(response.status)
        if (!response.ok) {
          console.error('エラーレスポンス', response)
        } else {
          return response.json()
        }
      })
      .then(result => setDogUrl(result.message))
      .catch(error => {
        console.error('エラー', error)
      })
  }

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
