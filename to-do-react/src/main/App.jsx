import { useState } from 'react'
import { Tarefa } from '../presentation/components/Tarefa'
import Batata from '../presentation/components/Botao'
import '../presentation/styles/App.css'
export default function App() {
  return (
    <>
    <div>
      <input />
      <Batata />
    </div>
    <div>
      <Tarefa />
    </div>
    </>
  )
}
