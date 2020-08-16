
const initialState = {
    persons: []
}
const personAddedHandler = (prevState) => {
    const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: 'Max',
        age: Math.floor(Math.random() * 40)
    }
    return { persons: prevState.persons.concat(newPerson) }    
}

const personDeletedHandler = (prevState,personId) => {
        return { persons: prevState.persons.filter(person => person.id !== personId) }

}


const reducer = (State = initialState,action)=> {
    if (action.type === 'ADD_PERSON') {
        return personAddedHandler(State)
    }
    else if (action.type === 'DELETE_PERSON') {
        return personDeletedHandler(State, action.personId)
    } 
    return State
}

export default reducer;