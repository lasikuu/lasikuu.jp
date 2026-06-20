import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n'
import { writable } from 'svelte/store'
import en from '../../locales/en.json'
import ja from '../../locales/ja.json'
import { StorageKeys, getValue } from './localStorage'

export enum AppLocale {
	EN = 'en',
	JA = 'ja'
}

export const appLocales = Object.values(AppLocale)

// Messages are bundled and added synchronously (not lazy `register` loaders) so
// they are available during prerender and at first client paint. Two small
// locales make the eager cost trivial, and it removes svelte-i18n's loading
// state entirely: the static HTML ships with real content and locale switching
// is instant. See +layout.svelte (no isLoading gate) and app.html.
addMessages(AppLocale.EN, en)
addMessages(AppLocale.JA, ja)

let initialLocale = getValue(StorageKeys.LanguagePref)
if (!initialLocale || !appLocales.includes(initialLocale)) {
	initialLocale = getLocaleFromNavigator()
	if (!initialLocale || !appLocales.includes(initialLocale)) {
		initialLocale = AppLocale.EN
	}
}

init({
	fallbackLocale: 'en',
	initialLocale,
	handleMissingMessage: () => {
		return ''
	}
})

export const langPreference = writable<AppLocale>(initialLocale)

export default {}
