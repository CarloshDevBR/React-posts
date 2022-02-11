import { Component } from 'react'
import './styles.css'

export class Button extends Component {
  render() {
     const { onClick, text, disabled } = this.props
  
    return (
      
        <button 
        onClick={onClick}
        disabled={disabled}
        className="button"
        >{text}</button>
     
    )
  }
}
