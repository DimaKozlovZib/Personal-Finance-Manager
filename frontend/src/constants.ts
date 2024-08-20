export const THEME_KEY: string = 'appTheme'

export const classes = (...classList: (string | boolean | undefined)[]) =>
	classList.filter((i) => typeof i === 'string').join(' ')
