import { useState } from 'react'
import { getInsult } from './services/getInsult'

export function App() {
  const [insult, setInsult] = useState('')

  const gerarInsulto = async () => {
    try {
      const insult = await getInsult()
      setInsult(insult)
    } catch {
      setInsult('')
    }
  }

  return (
    <>
      <div>
        <div>{insult}</div>
        <button onClick={gerarInsulto}>Gerar insulto</button>
      </div>
    </>
  )
}
