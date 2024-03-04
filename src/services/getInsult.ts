import axios from 'axios'

interface InsultData {
	error: boolean
	lang: string
	template: string
	insult: string
}

export async function getInsult() {
	const api = 'https://insult.mattbas.org/api/insult.json'
	const data = axios.get<InsultData>(api)

	if ((await data).data.error) new Error('error em buscar insultos')

	// Traduzir insulto para portugues

	const insultPtBr = await axios.get(
		`https://api.mymemory.translated.net/get?q=${
			(await data).data.insult
		}&langpair=en|pt-br`,
	)

	return insultPtBr.data.responseData.translatedText
}
