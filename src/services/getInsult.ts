import axios from 'axios'

interface InsultData {
	error: boolean
	lang: string
	template: string
	insult: string
}

export async function getInsult(lang: string) {
	// Get the insults API.
	const api = 'https://insult.mattbas.org/api/insult.json'
	const data = axios.get<InsultData>(api)

	// Check if there was an error in the request.
	if ((await data).data.error)
		return new Error(' error in searching for insults.')

	// If the requested language is the same as the language of the sentence, return the sentence.
	if (lang.toLowerCase() == 'en') return (await data).data.insult

	// Translates the English sentence into the requested language.
	const insultPtBr = await axios.get(
		`https://api.mymemory.translated.net/get?q=${
			(await data).data.insult
		}&langpair=en|${lang.toLowerCase()}`,
	)

	// returns the sentence in the requested language.
	return insultPtBr.data.responseData.translatedText
}
