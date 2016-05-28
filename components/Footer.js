import React, {Component} from 'react'

export default class Footer extends Component {
    handleClickShowAll(e) {
        let node = this.refs.showStatusBtn
        if (node.textContent == " showAll ") {
            node.textContent = " showUndo "
        } else {
            node.textContent = " showAll "
        }
        this.props.changeShowStatus()
    }
    render() {
        return <p> {this.props.itemNum} item left
                <span onClick = {(e) => this.handleClickShowAll(e) } ref="showStatusBtn"> showAll </span>
                <span onClick = {() => this.props.completeAll()}>{' '} completeAll </span>
                <span onClick = {() => this.props.clearCompleted()}>{' ' }clearComplete </span>
               </p>
    }
}
