// DO NOT DELETE
import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const LIST_URL = 'https://dog.ceo/api/breeds/list/all'

  const [breeds, setBreeds] = useState(LIST_URL)

  const callbackFunction = () => {
    // APIのレスポンスから、犬種リストの配列を生成して、breedsに格納
    fetch(LIST_URL)
      .then(response => {
        // HTTPステータスコードが200番台かを判定
        if (!response.ok) {
          console.error('エラーレスポンス', response)
        } else {
          return response.json()
        }
      })
      .then(result => setBreeds(Object.keys(result.message)))
      .catch(error => {
        console.error('エラー', error)
      })
  }

  // DogListContainerコンポーネント(DogListContainer.js)を作成して、Appコンポーネントから読み込む(現状JSXをreturnしていない)

  useEffect(callbackFunction, [])

  return (
    <div>
      <li>
        <div>
          <p>犬の画像を表示するサイトです。</p>
        </div>
      </li>
      <li>
        <div>
          {/* <DogImage url={dogUrl} /> */}
          <br />
          {/* <button onClick={updateDogUrl}>update</button> */}
        </div>
      </li>
    </div>
  )
}
