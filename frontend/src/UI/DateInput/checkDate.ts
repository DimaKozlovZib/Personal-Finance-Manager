const checkDate = (value: string) => {
	const dateParts = value.split('-')
	const day = parseInt(dateParts[2], 10)
	const month = parseInt(dateParts[1], 10)
	const year = parseInt(dateParts[0], 10)

	const NaNCondition = isNaN(day) || isNaN(month) || isNaN(year)

	const date = new Date(year, month - 1, day)
	const equalityCondition =
		date.getFullYear() !== year ||
		date.getMonth() !== month - 1 ||
		date.getDate() !== day

	const maxDaysInMonth = new Date(year, month, 0).getDate()
	const dayCondition = date > new Date() || day > maxDaysInMonth

	const yearCondition = year !== new Date().getFullYear()

	return equalityCondition || NaNCondition || dayCondition || yearCondition
}

export default checkDate
