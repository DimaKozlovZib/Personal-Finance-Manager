import { useDispatch } from "react-redux"
import { useMemo } from "react"
import { bindActionCreators } from "@reduxjs/toolkit"
import { actions as themeActions } from "../store/slices/themeReducer"
import { actions as modalActions } from "../store/slices/modalReducer"


const rootActions = {
    ...themeActions,
    ...modalActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}