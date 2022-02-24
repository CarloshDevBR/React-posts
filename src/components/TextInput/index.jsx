import P from 'prop-types'
import './styles.css'

export const TextInput = ({searchValue, handleChange}) => (
    
  <input type='search'
    className='inputSearch' 
    onChange={handleChange} 
    value={searchValue} 
    placeholder='Type your search'
  />

)

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
}