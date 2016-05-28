import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as TodoActions from "../actions/actions"

import Additem from './AddItem.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'

export default class App extends Component {
    render() {
        // const { value, actions } = this.props
        console.log(this.state);
        console.log(this.props);
        return <div>
        <h2>My todoList</h2>

        <Additem handleClick = { this.props.addTodo } />

        <TodoList todoList = {this.props.value.todoList}
                    showAll = {this.props.value.showAll}
                    delItem = { this.props.delTodo }
                    changeCompleteStatus = {this.props.changeCompleteStatus} />

        <Footer itemNum = { this.props.value.todoNum }
                completeAll = { this.props.completeAll }
                changeShowStatus = {this.props.changeShowStatus}
                clearCompleted = {this.props.clearCompleted} />

        </div>
    }
}

function mapStateToProps(state) {
    return { value: state }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(TodoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
