import React, {Component} from 'react'

class Side extends Component {
  constructor(props) {
    super(props)
    debugger
  }

  sides = () =>{
    console.log('idk')
  }

    render() {
      return (
      <div>
        { this.props.sides.join(", ") }
      </div>
    )
  }
}

export default Side;
