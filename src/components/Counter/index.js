import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import EachElement from '../EachElement'

class Counter extends Component {
  state = {
    countedCharactersList: [],
    eachObject: {},
    value: '',
  }

  onLettersChange = event => {
    const eachValue = {
      id: uuidv4(),
      name: event.target.value,
      length: event.target.value.length,
    }
    this.setState({eachObject: eachValue, value: event.target.value})
  }

  onAddList = event => {
    event.preventDefault()
    const {eachObject} = this.state
    this.setState(prevState => ({
      countedCharactersList: [...prevState.countedCharactersList, eachObject],
      value: '',
    }))
  }

  render() {
    const {countedCharactersList, value} = this.state
    console.log(countedCharactersList)
    return (
      <div className="main-bg">
        <div className="content-container">
          <div className="output-section">
            <div className="output-upper-section">
              <h1 className="output-section-title">
                Count the characters Like a <br />
                Boss...
              </h1>
            </div>
            <div>
              {countedCharactersList.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-items-img"
                />
              ) : (
                <ul className="unorderedlist-styling">
                  {countedCharactersList.map(eachValue => (
                    <EachElement eachValue={eachValue} key={eachValue.id} />
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="input-section">
            <h1 className="input-section-title">Character Counter</h1>
            <form className="input-container" onSubmit={this.onAddList}>
              <input
                type="text"
                className="input-field"
                placeholder="Enter the Characters here"
                value={value}
                onChange={this.onLettersChange}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
