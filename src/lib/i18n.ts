import { getLocaleFromNavigator, init, register } from 'svelte-i18n'
import { writable } from 'svelte/store'
import { StorageKeys, getValue } from './localStorage'

export enum AppLocale {
	EN = 'en',
	JA = 'ja'
}

export const appLocales = Object.values(AppLocale)

register('en', () => import('../locales/en.json'))
register('ja', () => import('../locales/ja.json'))

let initialLocale = getValue(StorageKeys.LanguagePref)
console.log('fromLocalStorage', initialLocale)
if (!initialLocale || !appLocales.includes(initialLocale)) {
	initialLocale = getLocaleFromNavigator()
	console.log('fromNavigator', initialLocale)
}

init({
	fallbackLocale: 'en',
	initialLocale
})

export const langPreference = writable<AppLocale>(initialLocale)

export default {}
