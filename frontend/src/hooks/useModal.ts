import { useActions } from './useActions'
import ModalKeys from '../ModalKeys'
import useAppSelector from './useAppSelector'
import { MouseEvent, useCallback } from 'react'

type useModalType = (
	modalKey: ModalKeys | null,
	wrapperSelector?: string,
	data?: any
) => [() => void, (e: MouseEvent) => void]

const useModal: useModalType = (modalKey, wrapperSelector, data: any) => {
	const { changeModal } = useActions()
	const modalState = useAppSelector((state) => state.modal)

	const setModal = useCallback(() => {
		changeModal({ key: modalKey })
		const classList = (document.querySelector('body') as HTMLBodyElement)
			.classList

		if (!modalState.key && modalKey) {
			classList.add('modalActive')
		} else if (modalState.key && !modalKey) {
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
