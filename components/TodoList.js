import React, {Component} from 'react'

export default class TodoList extends Component {
    showCompleted(item) {
        if (!this.props.showAll) {
            return {display: item.completed?"none":"auto",
                    textDecoration: item.completed?'line-through':'none'}
        } else {
            return {textDecoration: item.completed?'line-through':'none'}
        }
    }

    render() {
        let items = this.props.todoList.map((item, i) => {
            return <div key={i}>
                     <li onClick={() => this.props.changeCompleteStatus(item)}
                            style={this.showCompleted(item)}>{ item.text }
                        <span onClick = { () =>this.props.delItem(item.id) }> -</span>
                     </li>
                    </div>
        })
        return <div>
            <ul>
                { items }
            </ul>
        </div>
    }
}
