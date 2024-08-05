import { useState } from 'react'

const useManageModal = (maxModalIndex: number) => {
	const [ModalIndex, setIndex] = useState<number>(0)
	const [directionСlockwise, setDirectionClockwise] = useState<boolean>(false)

	const goNext = () => {
		if (ModalIndex < maxModalIndex) {
			setIndex(ModalIndex + 1)
			setDirectionClockwise(false)
		}
	}

	const goBack = () => {
		if (ModalIndex > 0) {
			setIndex(ModalIndex - 1)
			setDirectionClockwise(true)
		}
	}

	const setModalIndex = (newIndex: number) => {
		if (newIndex < ModalIndex) setDirectionClockwise(true)
		setIndex(newIndex)
	}

	return {
		ModalIndex,
		setModalIndex,
		goBack,
		goNext,
		directionСlockwise
	}
}

export default useManageModal
