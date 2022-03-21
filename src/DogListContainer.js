// DO NOT DELETE
import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const LIST_URL = 'https://dog.ceo/api/breeds/list/all'

  const [breeds, setBreeds] = useState([])

  // 3. 選択した犬種を保持するために、useStateでselectedBreedとsetSelectedBreedを定義する。（DogListContainerコンポーネントで定義してください）
  const [selectedBreed, setSelectedBreed] = useState('Please Select')

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

  const handleChange = event => {
    setSelectedBreed(event.target.value)
  }

  // DogListContainerコンポーネント(DogListContainer.js)を作成して、Appコンポーネントから読み込む(現状JSXをreturnしていない)

  useEffect(callbackFunction, [])

  console.log('----------breeds--------', breeds)

  return (
    <div>
      <p>
        ドロップダウンリストの表示:
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onChange={handleChange}
        />
      </p>
    </div>
  )
}
