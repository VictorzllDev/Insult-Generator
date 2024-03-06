import axios from 'axios'
import { ITranslated, InsultData } from '../types'

export async function getInsult(lang: string): Promise<string> {
	// Get the insults API.
	const data = axios.get<InsultData>(
		'https://insult.mattbas.org/api/insult.json',
	)

	// Check if there was an error in the request.
	if ((await data).data.error)
		throw new Error('error in searching for insults.')

	// If the requested language is the same as the language of the sentence, return the sentence.
	if (lang.toLowerCase() == 'en') return (await data).data.insult

	// Translates the English sentence into the requested language.
	const insultPtBr = await axios.get<ITranslated>(
		`https://api.mymemory.translated.net/get?q=${
			(await data).data.insult
		}&langpair=en|${lang.toLowerCase()}`,
	)

	// returns the sentence in the requested language.
	return insultPtBr.data.responseData.translatedText
}
