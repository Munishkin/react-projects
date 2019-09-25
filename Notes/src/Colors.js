import React, { Component } from 'react';

const colors = [
  {
    color: 'lilac',
    code: '#F171F2'
  },
  {
    color: 'brown',
    code: '#FED085'
  },
  {
    color: 'pink',
    code: '#FE7998'
  },
  {
    color: 'grey',
    code:  '#CED9DE'
  },
  {
    color: 'blue',
    code:  '#86D8F9'
  },
  {
    color: 'orange',
    code: '#FFFD37'
  },
  {color: 'aqua',
  code: '#7BFEF6'
},
  {
    color: 'green',
    code: '#84F47A'}
]
export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedCode: ''
    }
  }
  handleClick(code) {
    this.props.onSelect(code);
    this.setState({
      checkedCode: code
    })
  }
  render() {
    const circles = colors.map(({color, code}) =>{
      const checked = code === this.state.checkedCode ? <span className='checked'></span> : null;
      return (
        <span key={color} className='circle' style={{background: code}} onClick={this.handleClick.bind(this, code)}>
        {checked}
      </span>
    )
    })
    return (
      <div className='row'>
        {circles}
        </div>
    )
  }
}