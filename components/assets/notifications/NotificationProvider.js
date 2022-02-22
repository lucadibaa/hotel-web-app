import { createContext, useContext, useReducer } from "react"
import Notification from "./Notification"

const NotificationContext = createContext()

const NotificationProvider = (props) => {

    const [state, dispatch] = useReducer((state, { type, payload }) => {
        switch (type) {
            case "ADD_NOTIFICATION":
                return [...state, { ...payload }]
            case "REMOVE_NOTIFICATION":
                return state.filter(note => note.id !== payload.id)
            //default
            default:
                return state
        }
    }, [])

    return (
        <NotificationContext.Provider value={dispatch}>
            <div className="fixed top-3 right-3 w-max z-50">
                {
                    state.map(note => (
                        <Notification dispatch={dispatch} key={note.id} {...note} />
                    ))
                }
            </div>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const dispatch = useContext(NotificationContext)

    return (props) => {
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: Math.floor(Math.random() * 1000),
                message: props.message || 'Inserisci un messaggio per questo alert',
                ...props
            }
        })
    }
}

export default NotificationProvider
