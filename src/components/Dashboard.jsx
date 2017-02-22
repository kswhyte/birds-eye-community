import React, { Component } from 'react';
import logo from '../styles/images/logo.svg';
import '../styles/css/App.css';

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Dashboard'
    }
  }

  updateTitle(e) {
    this.setState({ title: e })
  }

  render() {
    let topics = ['Communal', 'Bathroom', 'Bedroom', 'Kitchen', 'Meals', 'Garden', 'Shopping', 'Pets', 'Maintenance', 'Behavior', 'Responsibility', 'Creativity', 'Study', 'Spirituality', 'Health', 'Exercise Routine'].map(e => {
      return <li key={e}><a onClick={() => this.updateTitle(e)}> {e} </a></li>
    })

    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <p className="dashboard-title">{this.state.title}</p>
          <button className="dashboard-add-button">Add New Item</button>
        </div>
        <div className="dashboard-body">
        <div className="dashboard-categories">
          <ul>
          {topics}
          </ul>
        </div>
        </div>
      </div>
    );
  }
}
