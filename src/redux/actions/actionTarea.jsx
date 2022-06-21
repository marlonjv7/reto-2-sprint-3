import { typesTarea } from "../types/Types"

export const actionTareaSync = (formValue) => {
    return {
        type: typesTarea.agg,
        payload: formValue
    }
}

export const actionElimTareaSync = (id) => {
    return {
        type: typesTarea.elim,
        payload: id
    }
}

export const actionElimTareaCompletedSync = (id) => {
    return {
        type: typesTarea.elimCompleted,
        payload: id
    }
}