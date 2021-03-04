export function managePresents(state={numberOfPresents: 0}, action){

    if (action.type === "INCREASE"){
        const newState = {...state, numberOfPresents: state.numberOfPresents + 1}
        return newState
    } else {
        return state
    }
}
