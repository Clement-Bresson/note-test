import React from 'react'
import config from './config'

class MainComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tempo: props.tempo,
      note: null,
      interval: null
    }
    this.callNote = this.callNote.bind(this)
  }

  callNote () {
    this.setState({
      interval: setInterval(() => {
        console.log('CHANGE')
        const gamme = this.props.gamme
        const length = config[gamme].length
        const noteIndex = Math.floor(Math.random() * length)
        this.setState({
          note: config[gamme][noteIndex]
        })
      }, this.state.tempo) 
    })
  }



  componentWillMount () {
    this.callNote()
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>{this.state.note}</div>
    )
  }
}

MainComponent.propTypes = {
  tempo: React.PropTypes.number,
  gamme: React.PropTypes.string
}

export default MainComponent
