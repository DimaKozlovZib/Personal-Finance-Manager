import { useActions } from './useActions'
import ModalKeys from '../ModalKeys'
import { MouseEvent, useCallback } from 'react'

type useModalType = (
	modalKey: ModalKeys | null,
	wrapperSelector?: string,
	data?: any
) => [() => void, (e: MouseEvent) => void]

const useModal: useModalType = (modalKey, wrapperSelector, data: any) => {
	const { changeModal } = useActions()

	const setModal = useCallback(() => {
		changeModal({ key: modalKey })
		const classList = (document.querySelector('body') as HTMLBodyElement)
			.classList

		if (modalKey) {
			classList.add('modalActive')
		} else {
			classList.remove('modalActive')
		}
	}, [data])

	const closeOnClickWrapper = useCallback((e: MouseEvent) => {
		if (!wrapperSelector) return
		const wrapper = document.querySelector(wrapperSelector)
		if (e.target === wrapper) {
			e.preventDefault()
			e.stopPropagation()
			setModal()
		}
	}, [])

	return [setModal, closeOnClickWrapper]
}

export default useModal
