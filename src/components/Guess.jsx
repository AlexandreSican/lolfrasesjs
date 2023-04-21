import { AiOutlineArrowRight } from 'react-icons/ai'
import { Data } from '../data/phrases'
import { useEffect, useState } from 'react'

export const Guessing = ({ indexI }) => {

  const [guess, setGuess] = useState('')
  const [index, setIndex] = useState(0)
  const [indexTemp, setIndexTemp] = useState(0)
  
  const toggleChange = (e) => {
    setGuess(e.target.value)
  }

  const reDoIndex = () => {
    let temp = Math.floor(Math.random() * Data.length)
    setIndex(temp)
  }

  const win = () => {
    alert('Acertou')
    reDoIndex()
  }

  const lose = () => {
    alert('Errou')
  }

  const handleSubmit = () => {
    if(Data[index].champion == guess){
      win()
    } else{
      lose()
    }
  }

  useEffect(() => {
    setIndex(indexI)
  },[])
  
  


  return (
    <div className="w-screen h-[380px] bg-blue-400 rounded-xl shadow-2xl flex flex-col items-center box-border">
      <div className="w-full h-[50%] flex flex-col justify-center items-center gap-8 box-border">
        <h1 className="text-xl mt-20">Frase:</h1>
        <div className=" bg-blue-300  flex justify-center items-center rounded" >
          <p className='flex justify-center items-center'>
            {Data[index].phrase}
          </p>
        </div>
      </div>
      <div className="w-full h-[50%] flex justify-center items-center gap-2">
        <h1 className='uppercase text-2xl'>Palpite:</h1>
        <div className="flex gap-6">
          <input
            type="text"
            className="outline-none border-none ring-0 pl-2"
            value={guess}
            onChange={toggleChange}
          />
          <button className="flex justify-center items-center uppercase font-bold rounded h-[50px] w-[50px] bg-black text-white border-2 border-solid border-black hover:opacity-70 transition-opacity"
                  onClick={handleSubmit}       
          >
            <AiOutlineArrowRight size={50} />
          </button>
        </div>
      </div>
    </div>
  )
}