import { useActions } from './useActions'
import ModalKeys from '../ModalKeys'
import useAppSelector from './useAppSelector'

type useModalType = (
	modalKey: ModalKeys | null,
	wrapperSelector?: string,
	data?: any
) => [() => void, (e: any) => void]

const useModal: useModalType = (modalKey, wrapperSelector, data: any) => {
	const { changeModal } = useActions()
	const modalState = useAppSelector((state) => state.modal)

	const setModal = () => {
		changeModal({ key: modalKey })
		const classList = (document.querySelector('body') as HTMLBodyElement)
			.classList

		if (!modalState.key && modalKey) {
			classList.add('modalActive')
		} else if (modalState.key && !modalKey) {
			classList.remove('modalActive')
		}
	}

	const closeOnClickWrapper = (e: MouseEvent) => {
		if (!wrapperSelector) return
		const wrapper = document.querySelector(wrapperSelector)
		if (e.target === wrapper) {
			e.preventDefault()
			e.stopPropagation()
			setModal()
		}
	}

	return [setModal, closeOnClickWrapper]
}

export default useModal
