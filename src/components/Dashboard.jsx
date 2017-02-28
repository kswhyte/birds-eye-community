import React, { Component } from 'react'
import '../styles/css/Dashboard.css'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      channelTopics: [
        'Communal',
        'Maintenance',
        'Bills',
        'Bathroom',
        'Bedroom',
        'Kitchen',
        'Study',
        'Garden',
        'Food',
        'Groceries',
        'Shopping',
        'Health',
        'Behavior',
        'Creativity',
        'Spirituality',
        'Exercise',
        'Pets',
      ]
    }
  }

  render() {
    let topics = this.state.channelTopics.map(e => {
      return (
        <li className="topic-names" key={e}>
          <div className={e.toLowerCase()}></div>
          <a onClick={() => this.props.updateTitle(e)}> { e } </a>
        </li>
      )
    })

    return (
      <div className="dashboard">
        <section className="dashboard-header">
          <h1 className="dashboard-title">CHANNELS</h1>
        </section>

        <section className="dashboard-body">
          <ul className="dashboard-categories">
            { topics }
          </ul>
        </section>
      </div>
    )
  }
}
