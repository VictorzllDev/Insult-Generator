import { useState } from 'react'
import { getInsult } from '../../services/getInsult'
import { IconLoader } from '@tabler/icons-react'
import { toast } from 'react-toastify'

export function Modal() {
  const [insult, setInsult] = useState<string>('')
  const [lang, setLang] = useState<string>('EN')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const generateInsult = async () => {
    setIsLoading(true)
    try {
      const insult = await getInsult(lang)
      setInsult(insult)
      toast.success('successfully created insult', {
        theme: 'light',
      })
    } catch (error: any) {
      toast.error(error.message, {
        theme: 'light',
      })
    }
    setIsLoading(false)
  }

  return (
    <div className="my-7 flex w-full max-w-screen-sm flex-col justify-between space-y-4 rounded bg-slate-300 p-4">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold capitalize text-slate-900">
          Insult Generator
        </p>
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
