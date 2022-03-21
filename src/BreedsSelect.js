// DO NOT DELETE
import React from 'react'

// selectタグやoptionタグを使ってください
// BreedsSelectコンポーネントは、propsとしてbreeds（犬種一覧の配列）を渡すようにしましょう
// 2. BreedsSelectコンポーネントをDogListContainerコンポーネントから読み込む

export const BreedsSelect = props => {
  const listItems = props.breeds.map(breed => {
    return (
      <option key={breed} value={breed}>
        {breed}
      </option>
    )
  })
  return (
    <div>
      <select value={props.selectedBreed} onChange={props.onChange}>
        {listItems}
      </select>
    </div>
  )
}
