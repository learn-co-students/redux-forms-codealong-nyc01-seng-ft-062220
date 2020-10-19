const addToDo = (toDo) => {
    
    return {
        type: "ADD_TODO",
        payload: toDo
    }
}

export default addToDo