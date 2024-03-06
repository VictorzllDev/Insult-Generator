export interface InsultData {
	error: boolean
	lang: string
	template: string
	insult: string
}

export interface ITranslated {
	responseData: {
		translatedText: string
	}
}
