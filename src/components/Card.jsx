import { useState } from "react"

export const Card = ({childToParent}) => {

  const [data, setData] = useState(false)
  

  const handleSubmit = () => {
    childToParent(true)
  }

  return (
    <div className="w-[480px] h-[240px] bg-blue-400 rounded-xl shadow-2xl flex justify-center items-center flex-col gap-12">
      <h1 className="text-xl">Bem-Vindo(a) ao LoL Frases</h1>
      <button className="uppercase font-bold rounded h-[50px] w-[100px] bg-black text-white border-2 border-solid border-black hover:opacity-70 transition-opacity"
              onClick={handleSubmit}
      >
        começar
      </button>
    </div>
  )
}
