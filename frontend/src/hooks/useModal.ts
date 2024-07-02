import { useActions } from "./useActions";
import ModalKeys from "../ModalKeys";

type useModalType = ( modalKey:(ModalKeys | null), wrapperSelector?:string, data?: any) => [() => void, (e: any) => void]

const useModal : useModalType = (modalKey, wrapperSelector, data) => {
    const {changeModal} = useActions()

    const setModal = () => {
        changeModal({key: modalKey})
        const classList = (document.querySelector('body') as HTMLBodyElement).classList;

        modalKey && !classList.contains('modalActive') ? classList.add('modalActive') : classList.remove('modalActive')
    }

    const closeOnClickWrapper = (e:MouseEvent) => {
        if (!wrapperSelector) return;
        const wrapper = document.querySelector(wrapperSelector)
        if (e.target === wrapper) {
            e.preventDefault();
            e.stopPropagation();
            setModal()
        }
    }

    return [setModal, closeOnClickWrapper]
}

export default useModal;