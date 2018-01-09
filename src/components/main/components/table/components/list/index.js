import React, {Component} from 'react'

export default class List extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.camper.username}</td>
        <td>{this.props.camper.recent}</td>
        <td>{this.props.camper.alltime}</td>
      </tr>
    )
  }
}