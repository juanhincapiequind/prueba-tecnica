import { fireEvent, render } from "@testing-library/react"
import SearchButton from "./SearchButton"

test('Render search button with a field', () => {
    const {getByPlaceholderText, getByText} = render(<SearchButton onSearch={() => {}}/>)
    const inputElement = getByPlaceholderText('Busca tu lugar...')
    expect(inputElement).toBeInTheDocument();
    
});

test('Call onSearch props when enter is pressed', () => {
    const handleSearch = jest.fn();
    const {getByPlaceholderText} = render(<SearchButton onSearch={handleSearch}/>);
    const inputElement = getByPlaceholderText('Busca tu lugar...')
    fireEvent.change(inputElement, {target:{value: 'Lugar de prueba'}})
    fireEvent.keyDown(inputElement, {key: 'Enter', code: 'Enter'})
    
    expect(handleSearch).toHaveBeenCalledWith('Lugar de prueba')
  
})