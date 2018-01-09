import React, {Component} from 'react'
import List from './components/list'

export default class Table extends Component {
  showCampers() {
    let campers = this.props.campers

    if (campers.length !== 0) {
      return campers.map((v, k) => {
        return <List key={'camper-'+k} index={k} camper={v}/>
      })
    }
  }

  sort(e) {
    this.props.change(e)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th 
              className="hover underline"
              onClick={this.sort.bind(this, 'thirtyDays')}
            >
              Points in Past 30 days 
              {this.props.type === 'thirtyDays' ? ' ▼' : ''} 
            </th>
            <th 
              className="hover underline" 
              onClick={this.sort.bind(this, 'all')}
            >
              All Points 
              {this.props.type === 'all' ? ' ▼' : ''}
            </th>
          </tr>
        </thead>

        <tbody>
          {this.showCampers()}
        </tbody>
      </table>
    ) 
  }
}