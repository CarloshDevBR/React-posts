import P from 'prop-types'
import './styles.css'

export const Button = ({ onClick, text, disabled }) => (
      
  <button onClick={onClick} disabled={disabled} className="button"> {text} </button>
    
)

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
}
