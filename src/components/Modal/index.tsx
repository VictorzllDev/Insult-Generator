import { useState } from 'react'
import { getInsult } from '../../services/getInsult'

export function Modal() {
  const [insult, setInsult] = useState('')

  const generateInsult = async () => {
    try {
      const insult = await getInsult()
      setInsult(insult)
    } catch {
      setInsult('')
    }
  }

  return (
    <div className="mx-auto my-7 flex max-w-screen-sm flex-col justify-between space-y-4 rounded bg-slate-300 p-4">
      <div className="flex justify-end">
        <select name="lang" id="lang" className="rounded p-2">
          <option>EN</option>
          <option>PT-BR</option>
        </select>
      </div>
      <div>
        <p className="my-2 break-words rounded bg-slate-100 p-1">
          {`"${insult}"`}
        </p>
      </div>
      <div>
        <button
          className="w-full rounded bg-blue-500 py-4 font-semibold capitalize text-white"
          onClick={generateInsult}
        >
          generate insult
        </button>
      </div>
    </div>
  )
}
