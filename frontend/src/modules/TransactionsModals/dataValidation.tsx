import moment from 'moment'

type checkDateType = (
	date: moment.Moment,
	Time: moment.Moment
) => { isValid: boolean; errorMes: string }

const checkDate: checkDateType = (Date, Time) => {
	const nowMoment = moment()
	const combinedDate = moment(
		Date.format('YYYY-MM-DD') + ' ' + Time.format('HH:mm:00')
	)
	const firstDayOfPreviousMonth = nowMoment
		.clone()
		.subtract(1, 'month')
		.startOf('month')

	if (combinedDate.isAfter(nowMoment)) {
		return {
			isValid: false,
			errorMes: 'Дата транзакции не может быть позднее текущей даты.'
		}
	} else if (combinedDate.isBefore(firstDayOfPreviousMonth)) {
		return {
			isValid: false,
			errorMes: 'Дата транзакции должна быть не раньше прошлого месяца.'
		}
	}

	return {
		isValid: true,
		errorMes: ''
	}
}

export { checkDate }
