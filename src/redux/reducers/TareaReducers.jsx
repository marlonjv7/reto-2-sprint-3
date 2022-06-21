import { typesTarea } from "../types/Types";

const initialState = {
    tarea: []
}

export const TareaReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesTarea.agg:
            return {
                tarea: [...state.tarea, action.payload]
            }

        case typesTarea.elim:
            return {
                tarea: state.tarea.filter(i => i.id !== action.payload)
            }

        case typesTarea.elimCompleted:
            return {
                tarea: state.tarea.filter(i => i.id === 0)
            }

        default:
            return state;
    }
}