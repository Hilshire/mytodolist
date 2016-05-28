import React, { Component } from 'react'

export default class Additem extends Component {
    handleClick(e) {
        let node = this.refs.input
        this.props.handleClick(node.value)
    }
    render() {
        return <div>
            <input ref="input"/>
            <button onClick = { (e) => this.handleClick(e) }>Add</button>
        </div>
    }
}
