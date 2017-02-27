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
        'Garden',
        'Food/Recipes',
        'Groceries',
        'Health',
        'Behavior',
        'Creativity',
        'Study',
        'Spirituality',
        'Shopping',
        'Exercise',
        'Pets',
      ]
    }
  }

  render() {
    let topics = this.state.channelTopics.map(e => {
      return <li className="topic-names" key={e}><a onClick={() => this.props.updateTitle(e)}> {e} </a></li>
    })

    return (
      <div className="dashboard">
        <section className="dashboard-header">
          <h1 className="dashboard-title">Channels</h1>
        </section>

        <section className="dashboard-body">
          <ul className="dashboard-categories">
            {topics}
          </ul>
        </section>
      </div>
    )
  }
}
