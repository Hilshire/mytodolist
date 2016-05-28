export function addTodo(text) {
    return {type:"ADD_TODO", text}
}

export function delTodo(id) {
    return {type:"DEL_TODO", id}
}


export function changeShowStatus() {
    return {type:"CHANGE_SHOW_STATUS"}
}


export function changeCompleteStatus(todo) {
    return {type:"CHANGE_COMPLETE_STATUS", todo}
}

export function completeAll() {
    return {type:"COMPLETE_ALL"}
}

export function clearCompleted() {
    return {type:"CLEAR_COMPLETED"}
}


