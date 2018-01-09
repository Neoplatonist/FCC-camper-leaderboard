import React, {Component} from 'react'
import Loading from './components/loading'
import Table from './components/table'

import { thirtyDays, all } from './utils.js'

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.month = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
    this.all = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'

    this.allTime = this.allTime.bind(this)
    this.change = this.change.bind(this)
    this.thirtyDays = this.thirtyDays.bind(this)
    

    this.state = {
      campers: [],
      loading: true,
      type: 'thirtyDays'
    }
  }

  componentWillMount() {
    thirtyDays(this.month)
      .then(data => {
        this.setState({ 
          campers: data,
          loading: false
        })
      })
  }

  change(e) {
    if (e === 'thirtyDays') {
      this.thirtyDays()
    } else if (e === 'all') {
      this.allTime()
    }
  }

  thirtyDays() {
    if (this.state.type !== 'thirtyDays') {
      this.setState({ 
        loading: true,
        type: 'thirtyDays' 
      })

      thirtyDays(this.month)
        .then(data => {
          this.setState({ 
            campers: data,
            loading: false,
          })
        })
    }
  }

  allTime() {
    if (this.state.type !== 'all') {
      this.setState({ 
        loading: true,
        type: 'all' 
      })

      all(this.all)
        .then(data => {
          this.setState({ 
            campers: data,
            loading: false, 
          })
        })
    }
  }

  render() {
    return (
      <main>
        { 
          this.state.loading ? 
          (<Loading />) :
          (<Table 
            change={this.change} 
            campers={this.state.campers} 
            type={this.state.type}
          />)
        }

        {/* <Loading /> */}
        
      </main>
    )
  }
}