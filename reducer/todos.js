export const initialState = {
    todoList: [{
        text:"learning React",
        completed:false,
        id:0
    }],
    showAll: true,
    todoNum:1
}

export default function todos(state = initialState, action) {
    var counter = state.todoNum;
    switch(action.type) {
        case "ADD_TODO":
            counter++;
            var result = state.todoList.map(function(item) {
                return  item;
            })
            result.push({
                text:action.text,
                completed:false,
                id:state.todoList.length
            })
            return Object.assign({}, state, {todoList:result,todoNum:counter})

        case "DEL_TODO":
            // counter--;
            var result = state.todoList.filter((item) => item.id != action.id)
            return Object.assign({}, state, {todoList:result, todoNum:counter})

        case "CHANGE_SHOW_STATUS":
            return Object.assign({}, state, {showAll: !state.showAll})

        case "CHANGE_COMPLETE_STATUS":
            if (action.todo.completed) {
                counter++
            } else {
                counter--
            };
            return Object.assign({}, state, {todoList: state.todoList.map(item => item.id == action.todo.id?
                                            Object.assign({}, item, {completed: !item.completed}):item), todoNum:counter})

        case "COMPLETE_ALL":
            return Object.assign({}, state, {todoList: state.todoList.map(item => Object.assign({}, item, {completed: true})
                ), todoNum:0})

        case "CLEAR_COMPLETED":
            return Object.assign({}, state, {todoList: state.todoList.filter(item => !item.completed)})
        default:
            return state
    }
}
