export function manageFriends(state={friends: []}, action){

    switch (action.type){
        case "ADD_FRIEND":
            const newState = {...state, friends: [...state.friends, action.friend]}
            return newState
            break;
        case "REMOVE_FRIEND":
            const updatedState = {...state, friends: state.friends.filter(friend => friend.id !== action.id)}
            return updatedState
            break;
        default:
            return state
    }
    
    
}
