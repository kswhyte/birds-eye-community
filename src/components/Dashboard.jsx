import React, { Component } from 'react'
import logo from '../styles/images/logo.svg'
import '../styles/css/Dashboard.css'
import firebase from 'firebase';

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      channelTopics: [
        'Communal',
        'Bathroom',
        'Bedroom',
        'Kitchen',
        'Meals',
        'Garden',
        'Shopping',
        'Pets',
        'Maintenance',
        'Behavior',
        'Responsibility',
        'Creativity',
        'Study',
        'Spirituality',
        'Health',
        'Exercise Routine'
      ]
    }
  }

  updateTitle(e) {
    firebase.database().ref('channel').set({
        channel: e
    });
  }

  render() {
    let topics = this.state.channelTopics.map(e => {
      return <li className="topic-names" key={e}><a onClick={() => this.updateTitle(e)}> {e} </a></li>
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
