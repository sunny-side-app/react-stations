// DO NOT DELETE
import React from 'react'
import { useState } from 'react'

import { DogImage } from './DogImage'

// componentの分割について：
// https://ja.reactjs.org/docs/components-and-props.html

export const Description = () => {
  const INITIAL_URL =
    'https://images.dog.ceo/breeds/terrier-dandie/n02096437_1641.jpg'
  // const UPDATE_URL =
  //   'https://images.dog.ceo/breeds/poodle-standard/n02113799_2139.jpg'
  const DOG_API = 'https://dog.ceo/api/breeds/image/random'

  const [dogUrl, setDogUrl] = useState(INITIAL_URL)
  const updateDogUrl = () => {
    fetch(DOG_API)
      .then(response => {
        // HTTPステータスコードが200番台かを判定
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
      <li>
        <div>
          <p>犬の画像を表示するサイトです。</p>
        </div>
      </li>
      <li>
        <div>
          <DogImage url={dogUrl} />
          {/* <img src={dogUrl}></img> */}
          <br />
          <button onClick={updateDogUrl}>update</button>
        </div>
      </li>
    </div>
  )
}
