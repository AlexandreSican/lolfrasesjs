import { useEffect, useState } from "react"
import { Card } from "./Card"
import { Guessing } from "./Guess"
import { Data } from '../data/phrases'

export const Game = () => {

  const [start, setStart] = useState(false)
  const indexSize = Math.floor(Math.random() * Data.length)

  const childToParent = (childdata) => {
    setStart(childdata)
  }
  return <Guessing indexI={indexSize}/>
  // useEffect(() => {console.log(indexSize)}, [])

  // if (!start) {
  //   return (<Card childToParent={childToParent}/>)
  // } else {
  //   return (<Guessing indexI={indexSize} />)
  // }
}