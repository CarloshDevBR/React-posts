import './styles.css'

export const TextInput = ({searchValue, handleChange}) => {
  return (
    <input type='search'
    className='inputSearch' 
    onChange={handleChange} 
    value={searchValue} 
    placeholder='Type your search'
    />
  )
}