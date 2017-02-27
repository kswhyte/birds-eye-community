import React, { Component } from 'react'
import '../styles/css/Dashboard.css'

// import communal from '../styles/channel-icons/communal.svg'
// import maintenance from '../styles/channel-icons/maintenance.svg'
// import bills from '../styles/channel-icons/bills.svg'
// import bathroom from '../styles/channel-icons/bathroom.svg'
// import bedroom from '../styles/channel-icons/bedroom.svg'
// import kitchen from '../styles/channel-icons/kitchen.svg'
// import garden from '../styles/channel-icons/garden.svg'
// import food from '../styles/channel-icons/food.svg'
// import groceries from '../styles/channel-icons/groceries.svg'
// import health from '../styles/channel-icons/health.svg'
// import behavior from '../styles/channel-icons/behavior.svg'
// import creativity from '../styles/channel-icons/creativity.svg'
// import study from '../styles/channel-icons/study.svg'
// import spirituality from '../styles/channel-icons/spirituality.svg'
// import shopping from '../styles/channel-icons/shopping.svg'
// import exercise from '../styles/channel-icons/exercise.svg'
// import pets from '../styles/channel-icons/pets.svg'

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
    // let channelIcons = [
    //   communal,
    //   maintenance,
    //   bills,
    //   bathroom,
    //   bedroom,
    //   kitchen,
    //   study,
    //   garden,
    //   groceries,
    //   shopping,
    //   food,
    //   health,
    //   behavior,
    //   creativity,
    //   spirituality,
    //   exercise,
    //   pets
    // ].forEach((icon, i) => {
    //   console.log('icon', icon)
    //   return (
    //     <li><img className="topic-icon" src={icon} alt="community-living-icon" key={i}/></li>
    //   )
    // })

    let topics = this.state.channelTopics.map(e => {
      return (
        <li className="topic-names" key={e}>
          <div className="icon-container"></div>
          <a onClick={(e) => this.props.updateTitle(e)}> { e } </a>
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
