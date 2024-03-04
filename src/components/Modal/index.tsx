import { useState } from 'react'
import { getInsult } from '../../services/getInsult'
import { IconLoader } from '@tabler/icons-react'

export function Modal() {
  const [insult, setInsult] = useState('')
  const [lang, setLang] = useState('EN')
  const [isLoading, setIsLoading] = useState(false)

  const generateInsult = async () => {
    setIsLoading(true)
    const insult = await getInsult(lang)
    setInsult(insult)
    setIsLoading(false)
  }

  return (
    <div className="my-7 flex w-full max-w-screen-sm flex-col justify-between space-y-4 rounded bg-slate-300 p-4">
      <div className="flex justify-end">
        <select
          name="lang"
          id="lang"
          className="rounded p-2"
          onChange={(e) => {
            setLang(e.target.value)
            setInsult('')
          }}
          value={lang}
        >
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
          className="flex w-full items-center justify-center rounded bg-blue-500 px-3 py-4 font-semibold capitalize text-white"
          onClick={generateInsult}
        >
          {isLoading ? (
            <IconLoader className="animate-spin" />
          ) : (
            'generate insult'
          )}
        </button>
      </div>
    </div>
  )
}
