import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import userEvent from '@testing-library/user-event'

import '@testing-library/user-event'

import { TextInput } from './index.jsx'


describe('<Posts />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} searchValue={'testando'}/>)

    const input = screen.getByPlaceholderText( /type your search/i )

    expect(input.value).toBe('testando')
  })

    it('should call rhandleChange function on each key pressed', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />)

    const input = screen.getByPlaceholderText(/type your search/i)
    const value = 'o valor'

    userEvent.type(input, value)

    expect(input.value).toBe('um valor qualquer')
    expect(fn).toHaveBeenCalledTimes(value.length)
  })
})