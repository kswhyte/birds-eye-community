import React, { Component } from 'react'
import '../styles/css/CreateTask.css'

export default class CreateTask extends Component {
  constructor() {
    super()
    this.state = {
      taskName: [],
      taskId: '',
      channel: '',
      messageContent: '',
      assignedTo: '',
      createdOn: '',
      dueDate: '',
      isTaskCompleted: false,
    }
  }

  render() {
    return (
      <form className="create-task-form">
        <select className="select-channel">
          <option></option>
        </select>
        <input className="assigned-to" placeholder="Assigned to..."></input>
        <input className="task-name" placeholder="Task Name..."></input>
        <textarea className="message-content" placeholder="Message..."></textarea>
        <input className="due-date" placeholder="Due Date..."></input>
      </form>
    )
  }
}
