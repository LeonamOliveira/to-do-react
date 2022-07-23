import { useState } from 'react'
import { Tarefa } from '../presentation/components/Tarefa'
import Batata from '../presentation/components/Botao'
import '../presentation/styles/App.css'

export default function App() {
  var lista = [];
  const [valor, setValor] = useState("");
  function HandleCreateTask(){
    lista.append(valor)
    console.log(lista)
  }
  return (
    <>
    <div>
      <input onChange={(e) => setValor(e.target.value)}/>
      <button onClick={HandleCreateTask}/>
    </div>
    <div>
      <Tarefa />
    </div>
    </>
  )
}
