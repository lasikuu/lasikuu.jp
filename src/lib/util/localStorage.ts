export enum StorageKeys {
	LanguagePref = 'languagePref'
}

export function getValue(key: StorageKeys) {
	try {
		const item = window.localStorage.getItem(key) || ''
		return item ? JSON.parse(item) : undefined
	} catch {
		return undefined
	}
}

export function setValue(key: StorageKeys, value: unknown) {
	try {
		window.localStorage.setItem(key, JSON.stringify(value))
		console.log('set value', key, value)
	} catch (e) {
		console.error(e)
	}
}
