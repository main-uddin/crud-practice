import React, { Component } from 'react'
// import './Style.css'

class App extends Component {
  constructor (p) {
    super(p)
    this.state = {
      name: '',
      show: [],
      edit: ''
    }
  }
  render () {
    return (
      <div className='lol'>
        <input
          className='input'
          type='text'
          onChange={this.handleInput.bind(this)}
        />
        <button className='click' onClick={this.handleClick.bind(this)}>
          click
        </button>
        <ul>
          {this.state.show.map((data, index) => (
            <li key={index}>
              {data}
              <button
                className='delete'
                name={index}
                onClick={this.handleDelete.bind(this)}
              >
                Delete
              </button>
              <button
                className='edit'
                name={index}
                onClick={this.handleEdit.bind(this)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  handleInput (e) {
    const val = e.target.value
    this.setState({
      name: val
    })
  }
  handleClick () {
    this.setState({
      show: [...this.state.show, this.state.name]
    })
  }
  handleDelete (e) {
    const newShow = [...this.state.show]
    newShow.splice(e.target.name, 1)
    this.setState({
      show: newShow
    })
  }
  handleEdit (e) {
    const editName = [...this.state.show]
    editName.splice(
      e.target.name,
      1,
      <span>
        <input
          className='secInput'
          onChange={e => this.setState({ edit: e.target.value })}
          type='text'
        />
        <button
          className='done'
          name={e.target.name}
          onClick={this.handleDone.bind(this)}
        >
          done
        </button>
      </span>
    )
    this.setState({
      show: editName
    })
  }
  handleDone (e) {
    const editName = [...this.state.show]
    editName.splice(e.target.name, 1, this.state.edit)
    this.setState({
      show: editName
    })
  }
}

export default App
